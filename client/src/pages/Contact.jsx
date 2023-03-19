import React, { useRef, useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import './contact.css'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const form = useRef()
    const [message, setMessage] = useState(false)
    const handleContact = (e) => {
        e.preventDefault()
        console.log(form.current)
        emailjs.sendForm('service_4zw06fh', 'template_z6buqju', form.current, 'XVsgKEjyvZaZKSyMK')
            .then((result) => {
                console.log(result.text);
                setMessage(true)
                setTimeout(() => {
                    setMessage(false)
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    }

    return (
        <div>
            <Header />
            <div className='contact_container'>
                <h3>CONTACT US</h3>
                {message && <h3>Your query received, we will contact you shortly</h3>}
                <div className='con_form_container'>
                    <form onSubmit={handleContact} ref={form}>
                        <input name='name' type="text" placeholder='Enter Name' />
                        <input name='email' type="email" placeholder='Enter Email' />
                        <input name='query' type="text" placeholder='Enter Query' />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;