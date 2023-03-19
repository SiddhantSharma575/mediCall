import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCard from './ItemCard'
import './itemList.css'
import axios from "axios"
const ItemsList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get("/product/all")
            setItems(res.data)
        }
        getItems()
    }, [])
    return (
        <div className="f_container">
            <h1 className="title">THE BEST MEDICINES</h1>
            <p className="desc">
                Here you will get best medicines with atleast 2 year+ expiry with decent & discounted market prices.
                Let's explore
            </p>
            <div className="wrapper">
                {
                    items.map((item) => (
                        <ItemCard item={item} key={item._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemsList