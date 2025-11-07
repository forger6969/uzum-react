import React, { useContext, useEffect, useState } from 'react'
import StatusBar from '../Components/StatusBar'
import Nav from '../Components/Nav'
import HomeSwiper from '../Components/HomeSwiper'
import Cards from '../Components/Cards'
import Category from '../Components/Category'
import AdminPanel from '../Components/AdminPanel'

import { AppContext } from '../AppContext'

const HomePage = () => {

    const { auth } = useContext(AppContext)
    const { user } = auth
    const { isAdmin } = user

    const [fetchProd, setFetch] = useState([])
    const [filtered, setFiltered] = useState([])
    const [filter, setFilter] = useState('')

    const [showSwiper, setSwiper] = useState(true)

    let prod = []

    const getProd = async () => {
        try {
            const data = await fetch(`http://localhost:3001/products`)
            const res = await data.json()
            setFetch(res)
            setFiltered(res)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        if (filter === ``) {
            setFiltered(fetchProd)
            setSwiper(true)
        } else {
            const filtered = fetchProd.filter(f => f.name_uz.toLowerCase().trim().includes(filter) || f.name_ru.toLowerCase().trim().includes(filter))
            setFiltered(filtered)
            setSwiper(false)
        }
    }, [filter, fetchProd])

    useEffect(() => {
        getProd()
    }, [])
    return (
        <>

            <StatusBar />
            <Nav setFilter={setFilter} />
            {showSwiper && <HomeSwiper />}
            {showSwiper && <Category set={setFiltered} prod={fetchProd} />}
            <Cards products={filtered} />
            {isAdmin &&
                <AdminPanel />
            }
        </>
    )
}

export default HomePage