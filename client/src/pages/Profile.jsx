import React from 'react'
import './profile.css'
import Header from "../components/Header"
import Footer from '../components/Footer'
import ProfilePic from "../images/pro.jpg"
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    return (
        <div>
            <Header />
            <div className="profile_container">
                <img src={ProfilePic} alt="" />
                <h4>{user && user.name}</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Profile