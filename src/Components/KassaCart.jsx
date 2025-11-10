import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../AppContext'

const KassaCart = ({ totalProd, price }) => {
    const { language } = useContext(AppContext)
    const { isUzb } = language

    const priceDiscount = price * 12000 * 0.95
    const priceNoDiscount = price * 12000
    const priceFoyda = priceNoDiscount - priceDiscount

    return (
        <div>

            <div className='w-[350px] border-[#36374014] border-[1px] rounded-[8px] p-[20px] flex flex-col gap-[10px]'>

                <p className='text-[#1f2026] text-[16px] font-medium'>{isUzb ? "Buyurtmangiz" : "Ваш заказ"}</p>
                <p className='text-[#1f2026] text-[15px]'>{isUzb ? "Mahsulotlar" : "Товары"} ({totalProd})</p>

                <p className="text-[#1f2026] text-[16px] font-medium pt-[10px]">jami</p>

                <div className='flex items-center justify-between'>
                    <p className='text-[#1f2026] text-[16px]'>{isUzb ? "Uzum karta bilan" : "С картой Uzum"}</p>

                    <div>
                        <p className='text-[#7f4dff] text-[20px] font-bold'>{priceDiscount.toLocaleString()} {isUzb ? `so'm` : 'сум'}</p>
                        <p className='text-[#00ad3a] text-[14px] font-medium'>{isUzb ? "Tejovingiz" : "Вы ссекономите"} {priceFoyda.toLocaleString()} {isUzb ? `so'm` : 'сум'}</p>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-[#1f2026] text-[16px]'>{isUzb ? "Uzum kartasiz" : "без карты Uzum"}</p>
                    <p className='text-[#1f2026] text-[14px]'>{priceNoDiscount.toLocaleString()}</p>
                </div>

                <button className='bg-[#7f4dff] w-full py-[15px] rounded-[12px] text-white font-bold text-[18px]'>{isUzb ? "Rasmiylashtirishga otish" : "Перейти к оформлению"}</button>

            </div>

        </div>
    )
}

export default KassaCart