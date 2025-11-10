import React, { useState, useEffect, useContext } from 'react'

import mishka from '../assets/mishka.png'
import man from '../assets/men-svgrepo-com.svg'
import woman from '../assets/women-svgrepo-com.svg'
import other from '../assets/other-svgrepo-com.svg'
import technology from '../assets/laptop-svgrepo-com.svg'

import { AppContext } from '../AppContext'


const Category = ({ set, prod }) => {
    const { language } = useContext(AppContext)
    const { isUzb } = language


    const filterFunct = (e) => {
        const filterCat = prod.filter(f => f.category_ru === e)
        set(filterCat)
    }

    const countt = 100
    console.log(Math.sqrt(countt))

    return (
        <div>

            <div className='px-[150px] mx-auto pt-[20px]'>

                <div className='flex items-center justify-between'>
                    <button onClick={() => filterFunct(`Детские`)} className='flex items-center justify-center bg-[#efefef] py-[15px] px-[20px] rounded-2xl cursor-pointer text-[20px] gap-[5px]'><img className='w-[25px]' src={mishka} alt="" />{isUzb ? "Bolalar uchun" : "Для детей"}</button>
                    <button onClick={() => filterFunct(`Мужские`)} className='flex items-center justify-center bg-[#efefef] py-[15px] px-[20px] rounded-2xl cursor-pointer text-[20px] gap-[5px]'><img className='w-[25px]' src={man} alt="" />{isUzb ? "Erkaklar uchun" : "Для мужчин"}</button>
                    <button onClick={() => filterFunct(`Женские`)} className='flex items-center justify-center bg-[#efefef] py-[15px] px-[20px] rounded-2xl cursor-pointer text-[20px] gap-[5px]'><img className='w-[25px]' src={woman} alt="" />{isUzb ? "Ayollar uchun" : "Для женщин"}</button>
                    <button onClick={() => filterFunct(`Электроника`)} className='flex items-center justify-center bg-[#efefef] py-[15px] px-[20px] rounded-2xl cursor-pointer text-[20px] gap-[5px]'><img className='w-[25px]' src={technology} alt="" />{isUzb ? "Elektronika" : "Электроника"}</button>
                    <button onClick={() => filterFunct(`Другое`)} className='flex items-center justify-center bg-[#efefef] py-[15px] px-[20px] rounded-2xl cursor-pointer text-[20px] gap-[5px]'><img className='w-[25px]' src={other} alt="" />{isUzb ? "Boshqalar" : "Другое"}</button>
                </div>

            </div>

        </div>
    )
}

export default Category