import React, { useState, useEffect, useContext } from 'react'

import plusSVG from '../assets/plus-svgrepo-com.svg'

import addSVG from '../assets/add-square-svgrepo-com.svg'
import deleteSVG from '../assets/delete-1-svgrepo-com.svg'
import banSVG from '../assets/ban-svgrepo-com.svg'

import { AppContext } from '../AppContext'
import AdminPanelModal from './AdminPanelModal'


const AdminPanel = () => {
    const { language } = useContext(AppContext)
    const { isUzb } = language
    const [show, setShow] = useState(false)
    const [modal, setModal] = useState(``)
    const [showModal, setModalShow] = useState(false)
    console.log(show);

    const handleClick = (info) => {
        setModalShow(true)
        setModal(info)
    }

    return (
        <div>

            <div className="fixed bottom-10 right-10 flex flex-col items-end gap-3 z-20">

                {show && (
                    <div className="flex flex-col items-end gap-2 mb-3 transition-all">
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-700">
                                {isUzb ? "Tovar qo‘shish" : "Добавить товар"}
                            </p>
                            <button onClick={() => handleClick('add')} className="bg-[#7f4dff] hover:bg-[#6a3cff] rounded-full p-2.5 shadow-md transition-transform duration-200 hover:scale-110">
                                <img className="w-6" src={addSVG} alt="" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-700">
                                {isUzb ? "Tovarni o‘chirish" : "Удалить товар"}
                            </p>
                            <button onClick={() => handleClick('del')} className="bg-[#7f4dff] hover:bg-[#6a3cff] rounded-full p-2.5 shadow-md transition-transform duration-200 hover:scale-110">
                                <img className="w-6" src={deleteSVG} alt="" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-700">
                                {isUzb ? "Foydalanuvchini bloklash" : "Забанить пользователя"}
                            </p>
                            <button onClick={() => handleClick('block')} className="bg-[#7f4dff] hover:bg-[#6a3cff] rounded-full p-2.5 shadow-md transition-transform duration-200 hover:scale-110">
                                <img className="w-6" src={banSVG} alt="" />
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => setShow(!show)}
                    className={`bg-[#7f4dff] hover:bg-[#6a3cff] rounded-full p-2.5 shadow-md transition-transform duration-300 ${show ? "rotate-45" : ""
                        }`}
                >
                    <img className="w-6" src={plusSVG} alt="" />
                </button>
            </div>


            {showModal && <AdminPanelModal modal={modal} setModal={setModalShow} />}


        </div >
    )
}

export default AdminPanel