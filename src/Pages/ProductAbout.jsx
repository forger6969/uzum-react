import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { AppContext } from '../AppContext'

const ProductAbout = () => {

    const { id } = useParams()
    const [product, setProd] = useState(null)
    const [isCart, setCart] = useState(false)
    const { language } = useContext(AppContext)
    const { isUzb } = language
    const navigate = useNavigate()


    const getprods = async () => {
        try {

            const data = await axios.get(`http://localhost:3001/products/${id}`)
            console.log(data.data);
            setProd(data.data)

            const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []
            const find = storage.find(f => f.product.id === data.data.id)

            if (find) {
                setCart(true)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = () => {
        const storage = JSON.parse(localStorage.getItem(`productBasket`)) || []

        const find = storage.find(f => f.product.id === product.id)

        if (find) {
            navigate('/CartPage')

        } else {
            const setTedProduct = { product: product, count: 1 }
            storage.push(setTedProduct)
            localStorage.setItem(`productBasket`, JSON.stringify(storage))
            navigate('/CartPage')
        }

    }




    useEffect(() => {
        getprods()
    }, [id])

    return (
        <div>

            {product ? (
                <>
                    <div className="max-w-6xl mx-auto p-6">

                        <p className="text-gray-500 text-sm mb-2">
                            {isUzb ? product.name_uz : product.name_ru}
                        </p>


                        <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg p-6">
                            <div className="md:w-1/2 flex justify-center items-center">
                                <img
                                    src={product.image_url}
                                    alt={product.name_ru}
                                    className="rounded-lg object-contain max-h-96"
                                />
                            </div>


                            <div className="md:w-1/2 flex flex-col justify-between">
                                <div>

                                    <h1 className="text-2xl font-bold mb-2">{isUzb ? product.name_uz : product.name_ru}</h1>
                                    <h2 className="text-xl text-gray-700 mb-4">{isUzb ? product.category_uz : product.category_ru}</h2>


                                    <p className="text-3xl font-semibold text-[#7f4dff] mb-6">
                                        {(product.price * 12000).toLocaleString()} {isUzb ? "so'm" : "сум"}
                                    </p>
                                </div>


                                <div className="flex gap-4 mt-4">
                                    <button onClick={addToCart} className="bg-[#7f4dff] text-white px-6 py-2 rounded-lg hover:bg-[#7f4dffb6] transition">
                                        {isCart ? isUzb ? "Tovar savatda (savatga otish)" : "Товар в корзине (перейти в корзину)" : isUzb ? "Savatga qoshish" : "Добавить в корзину"}
                                    </button>
                                    <button className="border border-[#7f4dff] text-[#7f4dff] px-6 py-2 rounded-lg hover:bg-[#7f4dff3e] transition">
                                        {isUzb ? "bolib to‘lash" : "В рассрочку"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (

                <div className='bg-[#00000080] h-[100%] w-[100%] fixed top-0 left-0'>
                    <div className="loader"></div>

                </div>

            )}

        </div>
    )
}

export default ProductAbout