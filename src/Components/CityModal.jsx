import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../AppContext'


const uzbekistanCities = [
    { uz: "Toshkent", ru: "Ташкент" },
    { uz: "Samarqand", ru: "Самарканд" },
    { uz: "Buxoro", ru: "Бухара" },
    { uz: "Namangan", ru: "Наманган" },
    { uz: "Andijon", ru: "Андижан" },
    { uz: "Farg‘ona", ru: "Фергана" },
    { uz: "Qo‘qon", ru: "Коканд" },
    { uz: "Marg‘ilon", ru: "Маргилан" },
    { uz: "Navoiy", ru: "Навои" },
    { uz: "Jizzax", ru: "Джизак" },
    { uz: "Guliston", ru: "Гулистан" },
    { uz: "Termiz", ru: "Термез" },
    { uz: "Qarshi", ru: "Карши" },
    { uz: "Shahrisabz", ru: "Шахрисабз" },
    { uz: "Xiva", ru: "Хива" },
    { uz: "Urganch", ru: "Ургенч" },
    { uz: "Nukus", ru: "Нукус" },
    { uz: "Angren", ru: "Ангрен" },
    { uz: "Chirchiq", ru: "Чирчик" },
    { uz: "Olmaliq", ru: "Алмалык" },
    { uz: "Bekobod", ru: "Бекабад" },
    { uz: "Qibray", ru: "Кибрай" },
    { uz: "Parkent", ru: "Паркент" },
    { uz: "Yangiyer", ru: "Янгиер" },
    { uz: "Zarafshon", ru: "Зарафшан" },
    { uz: "Denov", ru: "Денау" },
    { uz: "Qunghirot", ru: "Кунград" },
    { uz: "Chust", ru: "Чуст" },
    { uz: "Pop", ru: "Пап" },
    { uz: "Koson", ru: "Касан" },
    { uz: "Muborak", ru: "Муборак" },
    { uz: "G‘ijduvon", ru: "Гидждуван" },
    { uz: "Kattaqo‘rg‘on", ru: "Каттакурган" },
    { uz: "Asaka", ru: "Асака" },
    { uz: "Quva", ru: "Кува" },
    { uz: "Rishton", ru: "Риштан" },
    { uz: "Xonobod", ru: "Ханабад" },
    { uz: "Turtkul", ru: "Турткуль" },
    { uz: "Beruniy", ru: "Беруни" },
    { uz: "Mo‘ynoq", ru: "Муйнак" },
    { uz: "Chortoq", ru: "Чартак" },
    { uz: "Yangiqo‘rg‘on", ru: "Янгикурган" },
    { uz: "Sho‘rchi", ru: "Шурчи" },
    { uz: "Sherobod", ru: "Шерабад" },
    { uz: "Boysun", ru: "Байсун" },
    { uz: "Zomin", ru: "Зомин" },
    { uz: "Do‘stlik", ru: "Дустлик" },
    { uz: "Mirbozor", ru: "Мирбазар" },
    { uz: "Paxtakor", ru: "Пахтакор" },
    { uz: "Olot", ru: "Алат" }
];



const CityModal = ({ setModal, modal, setCity }) => {

    const { language } = useContext(AppContext)
    const { isUzb, setLang } = language

    const [searched, setSearch] = useState(uzbekistanCities)

    const closeModal = () => {
        setModal(!modal)
    }

    const setCityClick = (city) => {
        setCity(city)
        localStorage.setItem(`city`, JSON.stringify(city))
        setModal(false)
        console.log(modal);
    }

    const search = (e) => {
        const value = e.target.value.toLowerCase().trim()
        const filtered = uzbekistanCities.filter(f => f.ru.toLowerCase().trim().includes(value) || f.uz.toLowerCase().trim().includes(value))
        setSearch(filtered)
    }

    return (
        <div>   

            <div className='bg-[#00000080] h-full w-full fixed top-0 left-0 z-[40]'>

                <div className='modal  bg-white fixed left-[400px] top-[100px] max-h-[460px] rounded-[8px] p-[32px] w-[664px] flex flex-col gap-[20px]'>

                    <div className='flex justify-between items-center '>
                        <p className='text-[25px] font-bold'>{isUzb ? "Shaharni tanlang" : "Выберете город"}</p>

                        <button onClick={closeModal} className='w-[28px] h-[28px] bg-[#dee0e5] rounded-full flex items-center justify-center text-[#cbcaca] pb-[2px] transition-all hover:bg-[#cecece] hover:text-white'>x</button>
                    </div>

                    <input onChange={search} className='bg-[#edeff2] w-full py-[10px] px-[20px] rounded-xl outline-none' placeholder={isUzb ? "Shaharni qidirish" : "Искать город"} type="text" />

                    <div className="cities overflow-y-scroll max-h-[300px]">
                        {searched.map((m, i) => (
                            <p onClick={() => setCityClick(m)} key={i} className='py-[15px] hover:bg-[#e2e1e1] transition-all px-[10px] border-b-[2px] border-b-[#adadad] text-[15px] font-medium'>{isUzb ? m.uz : m.ru}</p>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CityModal