import React from 'react'
import './orderCart.css'
import First from "../images/First.jpg"

const OrderCart = () => {
    return (
        <div className='order_cart'>
            <img src={First} alt="" width="200px" height="200px" />
            <h4>Paracetamol</h4>
            <h4>Order Status : Delievered</h4>
        </div>
    )
}

export default OrderCart