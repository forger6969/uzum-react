import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/uzumLogo.png'

import { AppContext } from '../AppContext'
import VxodModal from './VxodModal'

import userSVG from '../assets/user-svgrepo-com.svg'
import heartSVG from '../assets/heart-svgrepo-com.svg'
import basketSVG from '../assets/shopping-bag-svgrepo-com.svg'
import catalogSVG from '../assets/catalog.svg'

const Nav = ({ setFilter }) => {
    const { language, auth, cart } = useContext(AppContext)
    const { isUzb } = language
    const { user, setUser } = auth
    const { setCart, cartArray } = cart
    console.log(language);

    const [modal, setModal] = useState(false)

    const filterFunc = (e) => {
        setFilter(e.target.value)
    }

    const vxodPerevod = isUzb ? "Kirish" : "Вход"

    return (
        <div>
            <div className="px-[150px] mx-auto">
                <div className='flex justify-between items-center pt-[30px]'>

                    <img className='w-[200px]' src={logo} alt="" />

                    <div className='flex items-center gap-[20px] pl-[10px]'>
                        <button className='bg-[#e5e5ff] py-[8px] px-[20px] rounded text-[#7000ff] flex items-center gap-[10px] transition-all cursor-pointer hover:bg-[#d3d3fe]'><img className='w-[15px]' src={catalogSVG} alt="" /> {isUzb ? "Katalog" : "Каталог"}</button>

                        <input onChange={filterFunc} className='w-[500px] h-[40px] border-[1px] border-[#adadad] rounded px-[10px] outline-none' placeholder={isUzb ? "Mahsulotlar izlash" : "Искать товары"} type="text" />
                    </div>

                    <div className='flex items-center gap-[10px] pl-[5px]'>
                        <button onClick={() => setModal(true)} className='font-medium px-[15px] py-[5px] transition-all hover:bg-[#d8d6d6] rounded text-[17px] flex items-center gap-[10px]'> <img className='w-[20px]' src={userSVG} alt="" /> {user.name || vxodPerevod}</button>
                        <button className='font-medium w-fit py-[5px] transition-all hover:bg-[#d8d6d6] rounded text-[17px] flex items-center gap-[10px]'><img className='w-[20px]' src={heartSVG} alt="" /> {isUzb ? "Saralangan" : "Избранное"}</button>
                        <button className='font-medium px-[15px] py-[5px] transition-all hover:bg-[#d8d6d6] rounded text-[17px] flex items-center gap-[10px]'> <img className='w-[20px]' src={basketSVG} alt="" /> {isUzb ? "Savat" : "Корзина"} <span className='bg-[#7000ff] rounded text-white px-[5px]'>{cartArray.length}</span></button>
                    </div>
                </div>

            </div>

            {modal && <VxodModal setModal={setModal} />}

        </div>
    )
}

export default Nav