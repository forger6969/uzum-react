import React, { useState, useEffect, useContext } from 'react'

const locationSVG = <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

import { AppContext } from '../AppContext'
import CityModal from './CityModal'

const StatusBar = () => {

    const { language } = useContext(AppContext)
    const { isUzb, setLang } = language
    console.log(language);

    const [modal, setModal] = useState(false)
    const [city, setCity] = useState({
        uz: "Tashkent",
        ru: "Ташкент"
    })

    const setLanguageBtn = () => {
        setLang(!isUzb)
        console.log(language);
    }

    const openModal = () => {
        setModal(!modal)
    }


    return (
        <div>

            <div className='bg-[#f0f2f5] flex justify-between px-[150px] py-[5px]'>
                <div className='flex gap-[50px]'>
                    <button onClick={openModal} className='flex items-center font-semibold'>{locationSVG} {isUzb ? city.uz : city.ru}</button>
                    <p className=''>{isUzb ? "Topshirish punktlari" : "Пункты выдачи"}</p>
                </div>

                <div className='flex items-center gap-[20px]'>

                    <p className='text-[#974bfa] font-medium border-r-[3px] border-r-[#adadad] px-[20px] transition-all hover:text-[#7000ff] cursor-pointer'>{isUzb ? "Sotuvchi bo‘lish" : "Стать продавцом"}</p>
                    <p className='text-[#974bfa] font-medium transition-all hover:text-[#7000ff] cursor-pointer'>{isUzb ? "Topshirish punktini ochish" : "Открыть пункт выдачи"}</p>

                    <p className='text-[#4D4F59] font-medium transition-all hover:text-black cursor-pointer'>{isUzb ? "Savol-javob" : "Вопрос-ответ"}</p>
                    <p className='text-[#4D4F59] font-medium transition-all hover:text-black cursor-pointer'>{isUzb ? "Buyurtmalarim" : "Мои заказы"}</p>

                    <button onClick={setLanguageBtn} className='cursor-pointer'>{isUzb ? "Ozbekcha" : "Русский"}</button>
                </div>

            </div>

            {modal && <CityModal setModal={setModal} modal={modal} setCity={setCity} />}

        </div>
    )
}

export default StatusBar