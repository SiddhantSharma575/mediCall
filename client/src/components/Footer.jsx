import React from 'react'
import './footer.css'
import Doctor from "../images/doctor.jpg"


const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_item">
                <img src={Doctor} alt="" />
            </div>
            <div className="footer_item">
                <div className="footer_card">
                    <h2 className="footer_motto">
                        OH YES, GET THE BEST MEDICINES ON TIME
                    </h2>
                </div>
                <div className="footer_card">
                    <h1 className="footer_title">FIND US</h1>
                    <p className="footer_text">
                        1654 R. Don Road #304.
                        <br /> Vijay Nagar Indore, 85022
                        <br /> (602) 867-1010
                    </p>

                </div>
                <div className="footer_card">
                    <h1 className="footer_title">WORKING HOURS</h1>
                    <p className="footer_text">
                        MONDAY UNTIL SUNDAY
                        <br />24 HOURS
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer