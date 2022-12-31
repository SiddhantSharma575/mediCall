import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"


const Login = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()

    const handleLogin = async () => {
        if (!userDetails.email || !userDetails.password) {
            alert("Please fill all the details")
            return;
        }
        const res = await axios.post("/api/login", userDetails)
        if (res.data._id) {
            localStorage.setItem("user", JSON.stringify(res.data))
            dispatch(setUser(res.data))
        }
        navigate("/")
    }

    return (
        <div>
            <Header />
            <div className='login_container'>
                <h3>LOGIN</h3>
                <div className='log_form_container'>
                    <input type="email" placeholder='Enter Email' value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                    <input type="password" placeholder='Enter Password' value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={() => navigate("/register")}>Register</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login