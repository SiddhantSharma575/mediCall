import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './contact.css'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='contact_container'>
                <h3>CONTACT US</h3>
                <div className='con_form_container'>
                    <input type="text" placeholder='Enter Name' />
                    <input type="email" placeholder='Enter Email' />
                    <input type="text" placeholder='Enter Query' />
                    <button>Send</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;