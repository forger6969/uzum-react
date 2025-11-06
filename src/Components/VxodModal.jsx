import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import logo from '../assets/uzumIDlogo.png'
import close from '../assets/close.svg'


import warningSVG from '../assets/warning.svg'

const VxodModal = ({ setModal }) => {

    const { language, auth } = useContext(AppContext)
    const [fetchUser, setFetch] = useState([])
    const [loginValue, setLoginValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState('')
    const [wrongPass, setWrong] = useState(false)
    const [mode, setMode] = useState(`login`)

    const [newPhone, setNewPhone] = useState('')
    const [newName, setNewName] = useState('')
    const [newPassword, setNewPassword] = useState('')


    const { user, setUser } = auth

    const { isUzb } = language

    const closeModal = () => {
        setModal(false)
    }

    async function getUsers() {
        try {
            const data = await fetch('http://localhost:3001/users')
            const res = await data.json()
            setFetch(res)
            console.log(fetchUser);
        } catch (err) {
            console.log(err);
        }
    }

    const postNewUser = async () => {
        const newPhoneClear = +newPhone.replace(/\D/g, '')
        const post = await fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newName,
                phone: newPhoneClear,
                password: newPassword,
                isAdmin: false
            })
        })

        setMode('login')
        setNewPassword(null)
        setNewPhone(null)
        setNewName(null)
    }

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '').slice(0, 9)
        const part1 = digits.slice(0, 2)
        const part2 = digits.slice(2, 5)
        const part3 = digits.slice(5, 7)
        const part4 = digits.slice(7, 9)
        return [part1, part2, part3, part4].filter(Boolean).join('-')
    }

    const checkLogin = () => {
        console.log(loginValue);
        const value = +loginValue.replace(/\D/g, '')
        console.log(value);
        const find = fetchUser.find(f => f.phone === value)
        if (find) {
            setWrong(false)




            if (find.password === passwordValue) {
                setUser(find)
                console.log(find);
                setModal(false)
                setWrong(false)
                localStorage.setItem(`currentUser`, JSON.stringify(find))
            } else {
                setWrong(true)
            }
        } else {
            setWrong(true)
            console.log(typeof passwordValue);
        }
    }

    const setModeBtn = () => {
        setMode('register')
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div>

            <div className="modal-back bg-[#00000080] h-full w-full fixed top-0 left-0 z-40">

                <div className="modal bg-white fixed left-[570px] top-[80px]  rounded-[8px] p-[32px] w-[414px] flex flex-col items-center gap-[20px]">
                    <button onClick={closeModal} className='w-[28px] h-[28px] bg-[#dee0e5] rounded-full flex items-center justify-center text-[#cbcaca] transition-all hover:bg-[#cecece] hover:text-white absolute right-[10px] top-[10px] cursor-pointer'>
                        <img className='w-[20px]' src={close} alt="" />

                    </button>
                    <img className='w-[250px]' src={logo} alt="" />

                    {mode === `login` ? (
                        <div className='w-full flex flex-col gap-[20px]'>
                            <p className='text-[23px]'>{isUzb ? "Uzum Market’ga kirish" : "Войти в Uzum Market"}</p>
                            <div className='relative'>
                                <input value={loginValue} onChange={(e) => setLoginValue(formatPhone(e.target.value))} className='w-full h-[30px] bg-[#edeff2] py-[25px] pl-[65px] rounded-[7px] text-[20px] font-medium focus:outline-[2px] focus:outline-[#7000ff] focus:shadow-[0_0_5px_#7000ff]' placeholder=' 00 000-00-00' type="text" />
                                <p className='absolute top-[10.5px] left-[6px] text-[20px] font-medium'>+998</p>
                            </div>
                            <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className='w-full h-[30px] bg-[#edeff2] py-[25px] px-[16px] rounded-[7px] text-[20px] font-medium focus:outline-[2px] focus:outline-[#7000ff] focus:shadow-[0_0_5px_#7000ff]' placeholder={isUzb ? "Parol" : "Пароль"} type="text" />

                            <div>
                                {wrongPass && <p className='flex items-center gap-[5px] text-red-600 text-[13px]'><img className='w-[13px] pt-[2px]' src={warningSVG} alt="" /> Неверный пароль или номер</p>}
                            </div>

                            <button onClick={checkLogin} className='w-full bg-[#6f00ff97] py-[7px] rounded-[7px] text-white text-[20px] transition-all hover:bg-[#7000ff]'>Login</button>
                            <p className='text-[#7000ff] text-center text-[13px] flex items-center gap-[5px] justify-center'>{isUzb ? "Akkaunt yoqmi?" : "Нету аккаунта? "}<span onClick={setModeBtn} className='font-medium cursor-pointer'>{isUzb ? "Registratsiya qilish" : "Зарегестрироватся"}</span></p>

                        </div>
                    ) : (
                        <div className='w-full flex flex-col gap-[20px]'>

                            <p className='text-[23px]'>{isUzb ? "Akkaunt yaratish" : "Зарегестрироватся"}</p>

                            <input className='w-full h-[30px] bg-[#edeff2] py-[25px] px-[16px] rounded-[7px] text-[20px] font-medium focus:outline-[2px] focus:outline-[#7000ff] focus:shadow-[0_0_5px_#7000ff]' value={newName} onChange={(e) => setNewName(e.target.value)} placeholder={isUzb ? "Ismingizni kiriting" : "Введите имя"} type="text" />
                            <div className='relative'>
                                <input value={newPhone} onChange={(e) => setNewPhone(formatPhone(e.target.value))} className='w-full h-[30px] bg-[#edeff2] py-[25px] pl-[65px] rounded-[7px] text-[20px] font-medium focus:outline-[2px] focus:outline-[#7000ff] focus:shadow-[0_0_5px_#7000ff]' placeholder=' 00 000-00-00' type="text" />
                                <p className='absolute top-[10.5px] left-[6px] text-[20px] font-medium'>+998</p>
                            </div>

                            <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='w-full h-[30px] bg-[#edeff2] py-[25px] px-[16px] rounded-[7px] text-[20px] font-medium focus:outline-[2px] focus:outline-[#7000ff] focus:shadow-[0_0_5px_#7000ff]' placeholder={isUzb ? "Parol yozing" : "Введите пароль"} type="text" />

                            <button onClick={postNewUser} className='w-full bg-[#6f00ff97] py-[7px] rounded-[7px] text-white text-[20px] transition-all hover:bg-[#7000ff]'>{isUzb ? "Registratsiya" : "Зарегестрироватся"}</button>

                            <p className='text-[#7000ff] text-center text-[13px] flex items-center gap-[5px] justify-center'>{isUzb ? "Akkaunt bormi?" : "Есть аккаунт? "}<span onClick={() => setMode(`login`)} className='font-medium cursor-pointer'>{isUzb ? "Kirish" : "Войти"}</span></p>

                        </div>
                    )}

                    <p className='text-center text-[15px] font-light pt-[50px]'>{isUzb ? "Avtotizatsiyadan o'tish orqali siz" : "Проходя авторизацию ,"} <span className='text-[#37f] font-[400] cursor-pointer'>{isUzb ? "shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz" : "вы соглашаетесь с политикой обработки персональных данных."}</span></p>

                </div>

            </div>

        </div>
    )
}

export default VxodModal