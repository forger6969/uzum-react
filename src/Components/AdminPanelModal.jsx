import React, { useContext, useState } from 'react'
import axios from 'axios'

import logo from '../assets/uzumADMIN_LOGO.png'
import close from '../assets/close.svg'

import { AppContext } from '../AppContext'

const AdminPanelModal = ({ modal, setModal }) => {

    const { language, auth } = useContext(AppContext)
    const { isUzb } = language
    const { user } = auth

    const [uzbName, setUzbName] = useState('')
    const [rusName, setRusName] = useState('')
    const [uzbCat, setUzbCat] = useState('')
    const [rusCat, setRusCat] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')

    const [succes, setSucces] = useState(false)

    const [id, setId] = useState('')
    const [pass, setPass] = useState('')

    const [userID, setUserID] = useState('')
    const [blockPass, setBlockPass] = useState('')

    const closeModal = () => {
        setModal(false)
    }


    const postProduct = async () => {
        try {
            if (uzbName !== '' && rusName !== '' && uzbCat !== '' && rusCat !== '' && price !== '' && img !== '') {

                const post = await axios.post('https://react-json-server-4.onrender.com/products', {
                    category_uz: uzbCat,
                    category_ru: rusCat,
                    name_uz: uzbName,
                    name_ru: rusName,
                    price: +price,
                    image_url: img
                })

                setUzbName(``)
                setRusName('')
                setRusCat(``)
                setUzbCat(``)
                setPrice('')
                setImg("")

                setSucces(true)
                setTimeout(() => {
                    setSucces(false)
                    setModal(false)
                }, 2000);

            } else {
                alert(`Заполните все поля!`)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async () => {
        try {

            if (pass === user.password) {
                const data = axios.delete(`https://react-json-server-4.onrender.com/products/${id}`)
                console.log(id);
                setId('')
                setPass('')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const blockUser = async () => {
        try {

            if (user.password === blockPass) {

                const data = await axios.delete(`https://react-json-server-4.onrender.com/users/${userID}`)
                setBlockPass('')
                setUserID('')
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='fixed inset-0 z-40 bg-[#00000080] flex items-start justify-center pt-[50px]'>
            <div className='bg-white rounded-[8px] px-[22px] py-[10px] w-[414px] flex flex-col items-center relative'>

                <button
                    onClick={closeModal}
                    className='absolute right-[10px] top-[10px] w-[28px] h-[28px] bg-[#dee0e5] rounded-full flex items-center justify-center text-[#cbcaca] transition-all hover:bg-[#cecece] hover:text-white cursor-pointer'
                >
                    <img className='w-[20px]' src={close} alt='close' />
                </button>

                {modal === `add` &&
                    <div>
                        <div className='flex flex-col gap-0 items-center relative'>
                            <img className='w-[200px]' src={logo} alt='logo' />
                            <p className='text-[24px] mt-2 font-semibold text-[#333] absolute bottom-[20px]'>
                                {isUzb ? "Tovar qo‘shish" : "Добавить товар"}
                            </p>
                        </div>

                        <div className='flex flex-col gap-[10px] w-full'>
                            <input
                                value={uzbName}
                                onChange={(e) => setUzbName(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "O'zbekcha nomi" : "Название (узбекское)"}
                                type='text'
                            />
                            <input
                                value={rusName}
                                onChange={(e) => setRusName(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "Ruscha nomi" : "Название (русское)"}
                                type='text'
                            />

                            <select
                                value={uzbCat}
                                onChange={(e) => setUzbCat(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                            >
                                <option value=''>{isUzb ? 'Kategoriya (UZ)' : 'Категория (UZ)'}</option>
                                <option value='Erkaklar'>Erkaklar</option>
                                <option value='Ayollar'>Ayollar</option>
                                <option value='Elektronika'>Elektronika</option>
                                <option value='Bolalar'>Bolalar</option>
                                <option value='Boshqa'>Boshqa</option>
                            </select>

                            <select
                                value={rusCat}
                                onChange={(e) => setRusCat(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                            >
                                <option value=''>{isUzb ? 'Kategoriya (RU)' : 'Категория (RU)'}</option>
                                <option value='Мужские'>Мужские</option>
                                <option value='Женские'>Женские</option>
                                <option value='Электроника'>Электроника</option>
                                <option value='Детские'>Детские</option>
                                <option value='Другое'>Другое</option>
                            </select>

                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "Narxi" : "Цена"}
                                type='number'
                            />
                            <input
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "Rasm URL" : "Ссылка на фото"}
                                type='url'
                            />
                        </div>

                        <button onClick={postProduct}
                            className='w-full bg-[#7000ff] mt-5 py-[10px] rounded-[7px] text-white text-[20px] font-medium transition-all hover:bg-[#5b00d1]'
                        >
                            {isUzb ? "Yaratish" : "Создать"}
                        </button>

                    </div>
                }
                {modal === `del` &&
                    <div>

                        <div className='flex flex-col gap-0 items-center relative'>
                            <img className='w-[200px]' src={logo} alt='logo' />
                            <p className='text-[24px] mt-2 font-semibold text-[#333] absolute bottom-[20px]'>
                                {isUzb ? "Tovarni ochirish" : "Удалить товар"}
                            </p>
                        </div>

                        <div className='flex flex-col gap-[10px]'>

                            <input
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "tovar ID" : "ID Товара"}
                                type='text'
                            />

                            <input value={pass} onChange={(e) => setPass(e.target.value)}
                                placeholder={isUzb ? "Parolingiz" : "Введите пароль"}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                type="text" />

                        </div>

                        <button onClick={deleteProduct}
                            className='w-full bg-[#7000ff] mt-5 py-[10px] rounded-[7px] text-white text-[20px] font-medium transition-all hover:bg-[#5b00d1]'

                        >{isUzb ? "Ochirish" : "Удалить"}</button>

                    </div>
                }

                {modal === `block` &&
                    <div>
                        <div className='flex flex-col gap-0 items-center relative w-[350px]'>
                            <img className='w-[200px]' src={logo} alt='logo' />
                            <p className='text-[24px] mt-2 font-semibold text-[#333] absolute bottom-[20px]'>
                                {isUzb ? "Foydalanuvchini bloklash" : "Забанить пользователя"}
                            </p>
                        </div>

                        <div className='flex flex-col gap-[10px]'>

                            <input value={userID}
                                onChange={(e) => setUserID(e.target.value)}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                placeholder={isUzb ? "Foydalanuvchi ID" : "ID Пользователя"}
                                type='text'
                            />

                            <input value={blockPass}
                                onChange={(e) => setBlockPass(e.target.value)}
                                placeholder={isUzb ? "Parolingiz" : "Введите пароль"}
                                className='w-full bg-[#edeff2] py-[12px] px-[16px] rounded-[7px] text-[18px] font-medium focus:outline-none focus:ring-2 focus:ring-[#7000ff]'
                                type="text" />

                        </div>

                        <button onClick={blockUser}
                            className='w-full bg-[#7000ff] mt-5 py-[10px] rounded-[7px] text-white text-[20px] font-medium transition-all hover:bg-[#5b00d1]'

                        >{isUzb ? "Bloklash" : "Забанить"}</button>
                    </div>
                }
            </div>

            {succes && <div className='absolute inset-0 flex items-center justify-center bg-[#ffffffcc] animate-fadeIn'>
                <div className='bg-[#7000ff] text-white px-6 py-4 rounded-xl flex items-center gap-2 shadow-lg animate-bounce'>
                    <span className='text-2xl'>✅</span>
                    <p className='text-lg font-semibold'>
                        {isUzb ? "Yaratildi!" : "Создано!"}
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default AdminPanelModal
