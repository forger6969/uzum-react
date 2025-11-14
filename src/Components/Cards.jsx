import React, { startTransition, useContext, useEffect, useState } from 'react'
import basketSVG from '../assets/basketwhite.svg'

import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'


const Cards = ({ products }) => {

    const { language, cart } = useContext(AppContext)
    const { isUzb } = language
    const { setCart, cartArray } = cart
    const [isCart, setIsCart] = useState([])
    const [browserStorage, setStorage] = useState([])
    const navigate = useNavigate()


    const indexClick = (e) => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []
        setStorage(storage)
        console.log(storage);

        const newCart = [...isCart]
        newCart.splice(e, 1, true)
        setIsCart(newCart)
        console.log(isCart);


        console.log(e);
        const product = { product: products[e], count: 1 }
        storage.push(product)
        setCart(storage)
        localStorage.setItem(`productBasket`, JSON.stringify(storage))
    }

    const isCartClick = (e) => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []

        const clickedProduct = products[e]
        const find = +storage.findIndex(f => f.product.id === clickedProduct.id)
        console.log(find);


        if (find !== -1) {
            storage[find].count++
            setStorage(storage)
            console.log(storage);
            localStorage.setItem(`productBasket`, JSON.stringify(storage))
        }
    }

    const minusCart = (e) => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []

        const clickedProduct = products[e]
        const find = +storage.findIndex(f => f.product.id === clickedProduct.id)
        console.log(find);


        if (find !== -1) {
            if (storage[find].count <= 1) {
                storage.splice(find, 1)
                console.log(storage);

                const newCart = [...isCart]
                newCart.splice(e, 1, false)
                setIsCart(newCart)
                localStorage.setItem(`productBasket`, JSON.stringify(storage))
            } else if (!storage[find] <= 0) {
                storage[find].count--
                setStorage(storage)
                console.log(storage);
                localStorage.setItem(`productBasket`, JSON.stringify(storage))
            }
        }
    }

    const transitionAbout = (e) => {
        navigate(`/ProductAbout/${e}`)
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []
        console.log(storage);

        const newCart = products.map((prod) => {
            const find = storage.some(f => f.product.id === prod.id)
            console.log(find);
            return find
        })

        setIsCart(newCart)
    }, [products])

    return (
        <div>

            <div className='flex flex-wrap gap-[90px] mx-auto px-[150px] py-[100px]'>

                {products.map((m, i) => {
                    const price = m.price * 12000 * 0.95
                    const oldPrice = m.price * 12000
                    const rass = oldPrice / 12

                    const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []
                    const find = storage.find((f) => f.product.id === m.id)


                    return (
                        <div className="card w-[232px] flex flex-col gap-[6px] rounded-2xl transition-all hover:shadow-[0px_0px_3px_1px_#adadad] p-[20px] max-h-[500px] justify-between">
                            <img className='rounded-[12px] transition-all hover:rounded-b-none ' src={m.image_url} alt={isUzb ? m.name_uz : m.name_ru} />

                            <div className='flex flex-col gap-[10px]'>
                                <div>
                                    <p className='text-[#7f4dff] font-medium text-[16px]'>{price.toLocaleString()}</p>
                                    <p className='text-[#7e818c] text-[12px]'>{oldPrice.toLocaleString()}</p>
                                </div>
                                <p className='bg-[#ffff00] px-[4px] py-[1px] w-fit text-[11px] rounded'>{rass.toLocaleString()} {isUzb ? "so'm/oyiga" : "сум/месяц"}</p>
                                <p className='text-[12px] w-full select-none'>{isUzb ? m.name_uz : m.name_ru}</p>

                                <div className='flex items-center gap-[10px]'>

                                    {isCart[i] ? <div className='border-[1px] border-[#36374014] rounded flex justify-around p-[5px] items-center'>
                                        <button className='text-[18px]' onClick={() => minusCart(i)}>-</button>
                                        <p className='text-[#7f4dff] text-[17px]'>{find.count}</p>
                                        <button className='text-[18px]' onClick={() => isCartClick(i)}>+</button>
                                    </div> :
                                        <button onClick={() => indexClick(i)} className='h-[32px] w-full rounded-[8px] bg-[#7f4dff] flex items-center justify-center gap-[3px] text-white cursor-pointer'><img className='w-[20px] fill-white' src={basketSVG} alt="" /> {isUzb ? "Korzinaga" : "В корзину"}</button>
                                    } <button onClick={() => transitionAbout(m.id)} className='bg-[#7f4dff] h-[32px] px-[5px] text-white rounded-[8px]'>{isUzb ? "Batafsil" : "Подробнее"}</button>

                                </div>

                            </div>

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Cards