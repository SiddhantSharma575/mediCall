import React, { useState } from 'react'
import Profile from '../images/pro.jpg'
import CartImg from "../images/cart.png"
import './header.css'
import { useNavigate } from "react-router-dom"
import Enter from "../images/enter.png"


const Header = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className='header_container'>
            <div className='logo_container'>
                <h3 onClick={() => navigate("/")}>MediCall</h3>
            </div>
            <div className="navLinks">
                <ul>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/contact")}>Contact us</li>
                    <li onClick={() => navigate("/products")}>Products</li>
                    <li onClick={() => navigate("/orders")}>Orders</li>
                    <li>LogOut</li>
                </ul>
            </div>
            <div className='cart-container'>
                <img src={CartImg} alt="" onClick={() => navigate("/cart")} />
                {
                    isLogin ? <img src={Profile} alt="" onClick={() => navigate("/profile")} /> :
                        <img src={Enter} alt="" onClick={() => navigate("/login")} />
                }
            </div>
        </div>
    )
}

export default Header