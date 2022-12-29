import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './login.css'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className='login_container'>
                <h3>Register</h3>
                <div className='log_form_container'>
                    <input type="text" placeholder='Enter Name' />
                    <input type="email" placeholder='Enter Email' />
                    <input type="password" placeholder='Enter Password' />
                    <button>Register</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;