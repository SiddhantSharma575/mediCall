import React from 'react'
import Profile from '../images/pro.jpg'
import CartImg from "../images/cart.png"
import './header.css'
import { useNavigate } from "react-router-dom"
import Enter from "../images/enter.png"
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const handleLogOut = () => {
        dispatch(setUser(null))
        localStorage.clear()
        navigate("/login")
    }
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
                    {user !== null && <li onClick={() => navigate("/orders")}>Orders</li>}
                    {user !== null && <li onClick={handleLogOut} >LogOut</li>}
                </ul>
            </div>
            <div className='cart-container'>
                <img src={CartImg} alt="" onClick={() => navigate("/cart")} />
                {
                    user !== null ? <img src={Profile} alt="" onClick={() => navigate("/profile")} /> :
                        <img src={Enter} alt="" onClick={() => navigate("/login")} />
                }
            </div>
        </div>
    )
}

export default Header