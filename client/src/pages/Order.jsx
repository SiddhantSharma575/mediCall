import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './order.css'
import Paid from "../images/paid.png"
import Checked from "../images/checked.png"
import Bike from "../images/bike.png"
import Delivered from "../images/delivered.png"

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return "done";
        if (index - status === 1) return "inProgress";
        if (index - status > 1) return "undone";
    };
    return (
        <div>
            <Header />
            <div className="order_container">
                <div className="order_left">
                    <div className="order_row">
                        <table className="order_table">
                            <tr className="order_trTitle">
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                            <tr className="order_tr">
                                <td>
                                    <span className="order_id">129837819237</span>
                                </td>
                                <td>
                                    <span className="order_name">John Doe</span>
                                </td>
                                <td>
                                    <span className="order_address">Elton st. 212-33 LA</span>
                                </td>
                                <td>
                                    <span className="order_total">$79.80</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="order_row">
                        <div className={statusClass(0)}>
                            <img src={Paid} width={30} height={30} alt="" />
                            <span>Payment</span>
                            <div className="order_checkedIcon">
                                <img
                                    className="order_checkedIcon"
                                    src={Checked}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={statusClass(1)}>
                            <img src={Bike} width={30} height={30} alt="" />
                            <span>On the way</span>
                            <div className="order_checkedIcon">
                                <img
                                    className="order_checkedIcon"
                                    src={Checked}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={statusClass(2)}>
                            <img src={Delivered} width={30} height={30} alt="" />
                            <span>Delivered</span>
                            <div className="order_checkedIcon">
                                <img
                                    className="order_checkedIcon"
                                    src={Checked}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_cart_right">
                    <div className="main_cart_wrapper">
                        <h2 className="main_cart_title">CART TOTAL</h2>
                        <div className="main_cart_totalText">
                            <b className="main_carttotalTextTitle">Subtotal:</b>₹39.60
                        </div>
                        <button className="main_cart_button">PAID!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order