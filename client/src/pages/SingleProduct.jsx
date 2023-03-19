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
import ErrorPage from './ErrorPage'

const SingleProduct = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    // const userID = useSelector((state) => state.user.user._id);
    const location = useLocation()
    const [product, setProduct] = useState("")
    const [quant, setQuantity] = useState(1)
    useEffect(() => {
        const getProduct = async (req, res, next) => {
            const resp = await axios.get(`/product/${location.state.id}`)
            setProduct(resp.data)
        }
        getProduct()
    }, [location.state.id])



    const handleAdd = async () => {
        const resp = await axios.post("/cart/addCart", {
            title: product.title,
            product_id: product._id,
            user_id: user.user._id,
            quantity: Number(quant),
            price: product.price,
            img: product.img
        })
        console.log(resp)
        navigate("/cart")
    }
    return user.user === null ? <ErrorPage
    /> : (
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
                        <button className="single_button" onClick={() => handleAdd()}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SingleProduct