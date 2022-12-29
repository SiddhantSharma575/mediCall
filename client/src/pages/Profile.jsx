import React from 'react'
import './profile.css'
import Header from "../components/Header"
import Footer from '../components/Footer'
import ProfilePic from "../images/pro.jpg"

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="profile_container">
                <img src={ProfilePic} alt="" />
                <h4>Sid</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Profile