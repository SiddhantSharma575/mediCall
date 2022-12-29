import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import './products.css'

const Products = () => {
    return (
        <div>
            <Header />
            <div className="pro_wrapper">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
            <Footer />
        </div>
    )
}

export default Products