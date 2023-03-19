import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"


const Register = () => {
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleRegister = async () => {
        if (!userDetail.email || !userDetail.password || !userDetail.name) {
            alert("Please fill all the details")
            return;
        }
        const res = await axios.post("/api/register", userDetail)
        navigate("/login")
    }
    return (
        <div>
            <Header />
            <div className='login_container'>
                <h3>Register</h3>
                <div className='log_form_container'>
                    <input type="text" placeholder='Enter Name' value={userDetail.name} onChange={(e) => setUserDetail({ ...userDetail, name: e.target.value })} />
                    <input type="email" placeholder='Enter Email' value={userDetail.email} onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })} />
                    <input type="password" placeholder='Enter Password' value={userDetail.password} onChange={(e) => setUserDetail({ ...userDetail, password: e.target.value })} />
                    <button onClick={handleRegister}>Register</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;