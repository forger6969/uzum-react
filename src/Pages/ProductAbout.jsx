import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductAbout = () => {

    const { id } = useParams()
    const [showedProd, setProd] = useState(null)


    const getprods = async () => {
        try {

            const data = await axios.get(`http://localhost:3001/products/${id}`)
            console.log(data.data);
            setProd(data.data)

        } catch (error) {
            console.log(error);
        }
    }

    console.log(showedProd);


    useEffect(() => {
        getprods()
    }, [id])

    return (
        <div>

            {showedProd ? (
                <>
                    <h2>{showedProd.name_uz}</h2>
                    <p>{showedProd.price} $</p>
                    <img src={showedProd.image_url} width={300} />
                </>
            ) : (
                <span className="loading loading-spinner text-secondary"></span>
            )}

        </div>
    )
}

export default ProductAbout