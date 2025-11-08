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

    const tashkent = {
        uz: "Tashkent",
        ru: "Ташкент"
    }

    const storage = JSON.parse(localStorage.getItem(`city`))
    console.log(storage);


    const [modal, setModal] = useState(false)
    const [city, setCity] = useState(storage || tashkent)
    const setLanguageBtn = () => {
        setLang(!isUzb)
    }

    const openModal = () => {
        setModal(!modal)
    }


    return (
        <div>

            <div className='bg-[#f0f2f5] flex justify-between px-[150px] py-[5px]'>
                <div className='flex gap-[50px]'>
                    <button onClick={openModal} className='flex items-center font-semibold'>{locationSVG} {isUzb ? city.uz : city.ru}</button>
                    <a target='_blank' href='https://yandex.uz/maps/10335/tashkent/geo/1947143881/?display-text=Uzum%20Market&ll=69.362688%2C41.357406&mode=search&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJDJQUWABT1j8RbMzriEM2xD8iBgABAgMEBSgKOABA31BIAWoCdXqdAc3MzD2gAQCoAQC9ARpbWQPCAZUB1d7T%2Bd8F6Ka9mbIFxu2W%2BaAFnLnZ8pgG7%2FPb64MGmveX0c8B2pTn7pEGtrHH7Z8Booyh8qwBjrjBp5ABq5vK7K8Fm9iF%2F%2BwBid3kocwDrtfdmqIBzrHvoJwE8L%2FauOgEodG9wq4Fm%2BvTo6EButituIcFsf7y4VuflMHovQH3lrS81AGkiKCRrwKfppiXlQSWgK2vggWCAhsoKGNoYWluX2lkOigxNzU5MTgyMDg5MDkpKSmKAgCSAgCaAgxkZXNrdG9wLW1hcHOqAgwxNzU5MTgyMDg5MDmwAgE%3D&sll=69.321696%2C41.334802&sspn=0.087204%2C0.039462&text=%7B%22text%22%3A%22Uzum%20Market%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%22175918208909%22%5D%7D%5D%7D&z=14' className=''>{isUzb ? "Topshirish punktlari" : "Пункты выдачи"}</a>

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