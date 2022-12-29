import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './login.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className='login_container'>
                <h3>LOGIN</h3>
                <div className='log_form_container'>
                    <input type="email" placeholder='Enter Email' />
                    <input type="password" placeholder='Enter Password' />
                    <button>Login</button>
                    <button onClick={() => navigate("/register")}>Register</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login