import React, { useState } from 'react'
import arrowl from "../images/arrowl.png"
import arrowr from "../images/arrowr.png"
import First from "../images/First.jpg"
import Second from "../images/Second.jpg"
import Third from "../images/Third.jpg"
import './featured.css'

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        First,
        Second,
        Third
    ]
    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    return (
        <div className="fcontainer">
            <div className="arrowContainer" style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <img src={arrowl} alt='' />
            </div>
            <div className="wrapper_main" style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((img, i) => (
                    <div className="imgContainer" key={i}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
            <div className="arrowContainer" style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <img src={arrowr} alt='' />
            </div>
        </div>
    )
}

export default Featured