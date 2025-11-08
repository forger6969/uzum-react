import React, { useContext, useEffect, useState } from 'react'
import basketSVG from '../assets/basketwhite.svg'

import { AppContext } from '../AppContext'


const Cards = ({ products }) => {

    const { language, cart } = useContext(AppContext)
    const { isUzb } = language
    const { setCart, cartArray } = cart


    const indexClick = (e) => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []
        console.log(e);
        const product = products[e]
        storage.push(product)
        setCart(storage)
        localStorage.setItem(`productBasket`, JSON.stringify(storage))
    }
    console.log(2 + "2");

    return (
        <div>

            <div className='flex flex-wrap gap-[90px] mx-auto px-[150px] py-[100px]'>

                {products.map((m, i) => {

                    const price = m.price * 12000 * 0.95
                    const oldPrice = m.price * 12000
                    const rass = oldPrice / 12


                    return (
                        <div className="card w-[232px] flex flex-col gap-[6px] rounded-2xl transition-all hover:shadow-[0px_0px_3px_1px_#adadad] p-[20px] max-h-[500px] justify-between">
                            <img className='rounded-[12px] transition-all hover:rounded-b-none ' src={m.image_url} alt={isUzb ? m.name_uz : m.name_ru} />

                            <div className='flex flex-col gap-[10px]'>
                                <div>
                                    <p className='text-[#7f4dff] font-medium text-[16px]'>{price.toLocaleString()}</p>
                                    <p className='text-[#7e818c] text-[12px]'>{oldPrice.toLocaleString()}</p>
                                </div>
                                <p className='bg-[#ffff00] px-[4px] py-[1px] w-fit text-[11px] rounded'>{rass.toLocaleString()} {isUzb ? "so'm/oyiga" : "сум/месяц"}</p>
                                <p className='text-[12px] w-full'>{isUzb ? m.name_uz : m.name_ru}</p>
                                <button onClick={() => indexClick(i)} className='h-[32px] w-full rounded-[8px] bg-[#7f4dff] flex items-center justify-center gap-[3px] text-white cursor-pointer'><img className='w-[20px] fill-white' src={basketSVG} alt="" /> {isUzb ? "Korzinaga" : "В корзину"}</button>
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