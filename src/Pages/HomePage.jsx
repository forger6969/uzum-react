import React, { useEffect, useState } from 'react'
import StatusBar from '../Components/StatusBar'
import Nav from '../Components/Nav'
import HomeSwiper from '../Components/HomeSwiper'
import Cards from '../Components/Cards'

const HomePage = () => {
    const [fetchProd, setFetch] = useState([])
    const [filtered, setFiltered] = useState([])
    const [filter, setFilter] = useState('')

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
        } else {
            const filtered = fetchProd.filter(f => f.name_uz.toLowerCase().trim().includes(filter))
            setFiltered(filtered)
        }
    }, [filter, fetchProd])

    useEffect(() => {
        getProd()
    }, [])
    return (
        <>

            <StatusBar />
            <Nav setFilter={setFilter} />
            <HomeSwiper />
            <Cards products={filtered} />

        </>
    )
}

export default HomePage