import React from 'react'
import './singleProduct.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import First from "../images/First.jpg"

const SingleProduct = () => {
    return (
        <div>
            <Header />
            <div className="single_container">
                <div className="single_left">
                    <div className="single_imgContainer">
                        <img src={First} alt="" />
                    </div>
                </div>
                <div className="single_right">
                    <h1 className="single_title">Paracetamol</h1>
                    <span className="single_price">₹39.60</span>

                    <div className="single_add">
                        <input type="number" defaultValue={1} className="single_quantity" placeholder='Quantity' />
                        <button className="single_button">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SingleProduct