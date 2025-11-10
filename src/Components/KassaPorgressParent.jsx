import React, { useState } from 'react'
import DeliveryProgress from './DeliveryProgress'
import KassaCart from './KassaCart'

const KassaPorgressParent = ({ price, total }) => {

    return (
        <div>

            <div className='flex flex-col gap-[20px] pt-[55px] sticky top-3'>
                <DeliveryProgress total={price * 12000} goal={50000} />
                <KassaCart totalProd={total} price={price} />
            </div>

        </div>
    )
}

export default KassaPorgressParent