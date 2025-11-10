import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import { months } from './Months'

import deleteSVG from '../assets/delete-2-svgrepo-com.svg'
import { StaticRouterProvider } from 'react-router-dom'

const CartProducts = ({ setPrice, setTotal }) => {

    const { language } = useContext(AppContext)
    const { isUzb } = language
    const [products, setProducts] = useState([])



    const getCart = () => {
        const cart = JSON.parse(localStorage.getItem('productBasket'))
        setProducts(cart)

        const total = cart.reduce((acc, totall) => {
            return acc + totall.price
        }, 0)
        setPrice(total)
        setTotal(cart.length)
    }

    const deleteFunction = (e) => {
        const cart = JSON.parse(localStorage.getItem('productBasket'))

        const filtered = cart.filter(f => f.id !== e.id)
        console.log(filtered);
        localStorage.setItem(`productBasket`, JSON.stringify(filtered))
        setProducts(filtered)

        const total = filtered.reduce((acc, totall) => {
            return acc + totall.price
        }, 0)
        setPrice(total)
        setTotal(filtered.length)
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div>

            <div>
                <p className='text-[25px] font-medium text-[#1f2026] pb-[20px]'>{isUzb ? "Savatingiz, " : "Корзина, "} <span className='text-[#7e818c]'>{isUzb ? `${products.length} mahsulot` : `${products.length} товаров`}</span></p>

                <div className='border-[#36374033] border-[1px] w-[800px] rounded p-[15px]'>

                    {products.map((m) => {

                        const date = new Date()
                        date.setDate(date.getDate() + 2)
                        const monthDate = date.getMonth()

                        const price = m.price * 12000 * 0.95
                        const oldPrice = m.price * 12000
                        const rass = oldPrice / 12

                        return (
                            <div className="card border-b-[#adadadc6] border-b-[1px] p-[15px]">

                                <div className='flex items-center justify-between'>

                                    <div>
                                        <p className='text-[#7e818c] text-[12px] font-medium'>{isUzb ? "Uzum market yetkazib berishi" : "Доставка Uzum market"}</p>
                                        <p className='text-[#1f2026] text-[18px] font-bold'> {isUzb ? `${date.getDate()}-${months[monthDate].uz} yetkazib beramiz` : `Доставим к ${date.getDate()}-${months[monthDate].ru}`} </p>
                                    </div>

                                    <button onClick={() => deleteFunction(m)} className='flex items-center gap-[2px] cursor-pointer'> <img className='w-[20px]' src={deleteSVG} alt="" /> {isUzb ? "Ochirish" : "Удалить"}</button>

                                </div>

                                <div className="product flex items-center justify-between">

                                    <div className='flex items-center gap-[20px]'>

                                        <img className='w-[120px]' src={m.image_url} alt="" />

                                        <div>
                                            <p className='text-[#1f2026] text-[16px] font-medium'>{isUzb ? `${m.name_uz}` : `${m.name_ru}`}</p>
                                            <p className='categorh text-[#7e818c] font-medium'>{isUzb ? `Kategoriya` : `Категория`}: <span className='text-[#1f2026] font-medium'>{isUzb ? `${m.category_uz}` : `${m.category_ru}`}</span></p>
                                        </div>

                                    </div>

                                    <div>
                                        <p className='text-[#7f4dff] text-[20px] font-bold'>{price.toLocaleString()} {isUzb ? `so'm` : `сум`}</p>
                                        <p className='text-[#7e818c] text-[15px] font-medium'>{oldPrice.toLocaleString()} {isUzb ? `so'm` : `сум`}</p>
                                    </div>

                                </div>


                            </div>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default CartProducts