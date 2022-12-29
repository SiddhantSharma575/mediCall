import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './cart.css'
import First from "../images/First.jpg"

const Cart = () => {
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
                        <tr className="cart_tr">
                            <td>
                                <div className="main_cart_imgContainer">
                                    <img
                                        src={First}
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className="main_cart_name">Paracetamol</span>
                            </td>
                            <td>
                                <span className="main_cart_price">₹19.90</span>
                            </td>
                            <td>
                                <span className="main_cart_quantity">2</span>
                            </td>
                            <td>
                                <span className="main_cart_total">₹39.80</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="main_cart_right">
                    <div className="main_cart_wrapper">
                        <h2 className="main_cart_title">CART TOTAL</h2>
                        <div className="main_cart_totalText">
                            <b className="main_carttotalTextTitle">Subtotal:</b>₹39.60
                        </div>
                        <button className="main_cart_button">CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart