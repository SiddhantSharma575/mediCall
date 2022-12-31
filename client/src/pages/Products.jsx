import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import './products.css'
import axios from "axios"

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get("/product/all")
            setItems(res.data)
        }
        getProducts()
    }, [])
    return (
        <div>
            <Header />
            <div className="pro_wrapper">
                {
                    items.map((item) => (
                        <ItemCard item={item} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Products