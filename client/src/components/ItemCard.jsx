import React from 'react'
import './itemCard.css'
// import First from "../images/First.jpg"
import { useNavigate } from "react-router-dom"

const ItemCard = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div className="card_container" onClick={() => navigate(`/product/${item._id}`, {
            state: {
                id: item._id
            }
        })}>
            <img src={item.img} alt="" width="300" height="300" />
            <h1 className="card_title">{item.title}</h1>
            <span className="card_price">₹{item.price}</span>
            <p className="card_desc">
                {item.desc}
            </p>
        </div>
    )
}

export default ItemCard