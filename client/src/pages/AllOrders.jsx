import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OrderCart from '../components/OrderCart'
import './allOrders.css'
import axios from "axios"
import { useSelector } from 'react-redux'

const AllOrders = () => {
    const user = useSelector((state) => state.user.user)
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get("http://localhost:5000/order/all/" + user._id)
            setAllOrders(res.data)
        }
        getOrders()
    }, [])
    return (
        <div>
            <Header />
            <div className='all_order'>
                {
                    allOrders.map((order) => (
                        <OrderCart order={order} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default AllOrders