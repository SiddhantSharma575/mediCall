import React from 'react'
import './orderCart.css'
import First from "../images/First.jpg"
import { useNavigate } from 'react-router-dom'

const OrderCart = ({ order }) => {
    const navigate = useNavigate()
    let status = order.status;
    let stsStr = "Order Placed"
    if (status === 1) {
        stsStr = "InProgress"
    } else if (status === 2) {
        stsStr = "Done"
    }
    return (
        <div className='order_cart' onClick={() => navigate("/orders/" + order._id, {
            state: {
                id: order._id
            }
        })}>
            <img src={First} alt="" width="200px" height="200px" />
            <h4>Id : {order._id}</h4>
            <h4>Order Status : {stsStr}</h4>
        </div>
    )
}

export default OrderCart