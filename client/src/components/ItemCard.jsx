import React from 'react'
import './itemCard.css'
import First from "../images/First.jpg"

const ItemCard = () => {
    return (
        <div className="card_container">
            <img src={First} alt="" width="300" height="300" />
            <h1 className="card_title">Paracetamol</h1>
            <span className="card_price">₹19.90</span>
            <p className="card_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default ItemCard