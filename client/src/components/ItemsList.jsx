import React from 'react'
import ItemCard from './ItemCard'
import './itemList.css'

const ItemsList = () => {
    return (
        <div className="f_container">
            <h1 className="title">THE BEST MEDICINES</h1>
            <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className="wrapper">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}

export default ItemsList