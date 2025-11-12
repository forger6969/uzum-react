import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../AppContext'
import CartProducts from '../Components/CartProducts'
import KassaPorgressParent from '../Components/KassaPorgressParent'

import emptyCartImg from '../assets/shopocat.490a4a1.png'

const CartPage = () => {

    const { language } = useContext(AppContext)
    const { isUzb } = language
    const [cartPrice, setPrice] = useState(0)
    const [total, setTotal] = useState(0)

    const storage = JSON.parse(localStorage.getItem(`productBasket`))
    const storageCheck = !localStorage.getItem(`productBasket`) ||   storage.length === 0

    useEffect(() => {
        document.title = isUzb ? `Uzum Market - savat` : "Uzum Market - корзина"
    }, [])

    return (
        <div>

            {
                storageCheck ? <div>
                    <div className='flex flex-col items-center gap-[10px] pt-[80px]'>
                        <img className='w-[128px]' src={emptyCartImg} alt="" />
                        <p className='text-[20px] font-medium text-[#1f2026]'>{isUzb ? 'Savatingiz hozircha bo‘sh' : 'Коризна пока пустая'}</p>
                        <p className='text-[15px] font-light'>{isUzb ? `Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin` : `Начните с главной страницы — вы можете найти нужный товар через поиск или просмотреть подборки.`}</p>
                        <Link to="/" className='bg-[#e6e8ed] rounded p-[5px] cursor-pointer'>{isUzb ? "bosh sahifa" : 'Главная страница'}</Link>
                    </div>
                </div> :
                    <div className='px-[150px] flex pt-[50px] justify-between'>
                        <CartProducts setPrice={setPrice} setTotal={setTotal} />
                        <KassaPorgressParent price={cartPrice} total={total} />
                    </div>
            }
        </div>
    )
}

export default CartPage