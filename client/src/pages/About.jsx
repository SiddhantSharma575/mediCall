import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './about.css'

const About = () => {
    return (
        <div>
            <Header />
            <div className='about_container'>
                <h3>ABOUT US</h3>
                <p>
                    Medicall - An application in which user can place orders
                    for medicines and it will be delivered to their residents
                    instantly. When user place an order the admin will analyze the
                    order and confirm from their side. Than admin will pick delivery partner
                    and then order will be delivered to the end user.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About