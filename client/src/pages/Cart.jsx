import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './cart.css'
// import First from "../images/First.jpg"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const user = useSelector((state) => state.user.user)
    const userID = useSelector((state) => state.user.user._id);
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState(0)
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const getCarts = async () => {
            const result = await axios.get("http://localhost:5000/cart/myCart/" + userID)
            setCarts(result.data)
        }
        getCarts()
    }, [])


    useEffect(() => {
        let cctotal = 0;
        carts.forEach((cc) => {
            cctotal += cc.price * cc.quantity;
        })
        setTotal(cctotal)
    }, [carts])

    const handleOrder = async () => {
        const obj = {
            userId: user._id,
            address: address,
            customer: user.name,
            total: total,
            status: 0,
        }
        const resp = await axios.post("http://localhost:5000/order/add", obj)
        console.log(resp)
        navigate("/orders")
    }

    return (
        <div>
            <Header />
            <div className="main_cart_container">
                <div className="cart_left">
                    <table className="cart_table">
                        <tr className="cart_trTitle">
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {
                            carts.map((cc) => (
                                <tr className="cart_tr" key={cc._id}>
                                    <td>
                                        <div className="main_cart_imgContainer">
                                            <img
                                                src={cc.img}
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="main_cart_name">{cc.title}</span>
                                    </td>
                                    <td>
                                        <span className="main_cart_price">₹{cc.price}</span>
                                    </td>
                                    <td>
                                        <span className="main_cart_quantity">{cc.quantity}</span>
                                    </td>
                                    <td>
                                        <span className="main_cart_total">₹{Number(cc.price * cc.quantity)}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <div className="main_cart_right">
                    <div className="main_cart_wrapper">
                        <h2 className="main_cart_title">CART TOTAL</h2>
                        <div className="main_cart_totalText">
                            <b className="main_carttotalTextTitle">Subtotal:</b>₹{total}
                        </div>
                        <input type="text" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        <button className="main_cart_button" onClick={handleOrder}>CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart