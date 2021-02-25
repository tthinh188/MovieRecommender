import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {

    const [logo, setLogo] = useState("      Movie Recommender by Thinh Phan      ")
    const [show, handleShow] = useState(false);

    const animateString = setTimeout( () => {
        setLogo(logo[logo.length-2] + logo[logo.length-1] + logo.substring(0,logo.length-2))
    }, 400)

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <span className="nav_logo">{logo}</span>

            
        </div>
    )
}

export default Nav
