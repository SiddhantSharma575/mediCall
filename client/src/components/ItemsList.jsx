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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
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