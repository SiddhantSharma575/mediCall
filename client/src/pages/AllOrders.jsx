import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OrderCart from '../components/OrderCart'
import './allOrders.css'

const AllOrders = () => {
    return (
        <div>
            <Header />
            <div className='all_order'>
                <OrderCart />
                <OrderCart />
                <OrderCart />
                <OrderCart />
            </div>
            <Footer />
        </div>
    )
}

export default AllOrders