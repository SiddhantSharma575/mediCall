import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './errorPage.css'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className='error_container'>
                <h1>Please Login to access</h1>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;