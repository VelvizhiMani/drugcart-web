"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartService } from '@/services/cartService'
function MyCart() {
    const { carts } = useSelector((state) => state.cartData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartService())
    }, [])

    console.log("carts", carts);
    
    return (
        <div className='p-4'>
            <h1 className='text-2xl'>My cart</h1>
            <ul className='list-disc p-4'>
                <li>test</li>
            </ul>
        </div>
    )
}

export default MyCart