import React from 'react'
import './singleProduct.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
// import First from "../images/First.jpg"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useSelector } from 'react-redux'

const SingleProduct = () => {
    const navigate = useNavigate()
    const userID = useSelector((state) => state.user.user._id)
    const location = useLocation()
    console.log(location.state.id)
    const [product, setProduct] = useState("")
    const [quant, setQuantity] = useState(1)
    useEffect(() => {
        const getProduct = async (req, res, next) => {
            const resp = await axios.get(`http://localhost:5000/product/${location.state.id}`)
            setProduct(resp.data)
        }
        getProduct()
    }, [])

    const handleAdd = async () => {
        const resp = await axios.post("http://localhost:5000/cart/addCart", {
            title: product.title,
            product_id: product._id,
            user_id: userID,
            quantity: Number(quant),
            price: product.price,
            img: product.img
        })

        navigate("/cart")
    }
    return (
        <div>
            <Header />
            <div className="single_container">
                <div className="single_left">
                    <div className="single_imgContainer">
                        <img src={product.img} alt="" />
                    </div>
                </div>
                <div className="single_right">
                    <h1 className="single_title">{product.title}</h1>
                    <span className="single_price">₹{product.price}</span>

                    <div className="single_add">
                        <input type="number" defaultValue={1} className="single_quantity" plac1eholder='Quantity' value={quant} onChange={(e) => setQuantity(e.target.value)} />
                        <button className="single_button" onClick={handleAdd}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SingleProduct