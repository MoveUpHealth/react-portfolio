import React from "react";
import { Link } from "react-router-dom";
import aboutme from "../../images/aboutme.png"
import contact from "../../images/contact.png"
import logo from "../../images/logo.png"
import portfolioImage from "../../images/portfolio.png"
import "./style.css"

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    
            <Link className="name navbar-brand" to="/">
                <img src={logo} height="85" className="d-inline-block align-top nav-img" alt="J logo" />
            Code by Jess</Link>
  
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                
                <li className="nav-item ml-auto">
                    <Link className="nav-link navbar-brand" to="/aboutme">
                    <img src={aboutme} width="63" height="40" className="d-inline-block align-top nav-img" alt="Smiley point to self" loading="lazy" />
                    About Me</Link>
                </li>
                
                <li className="nav-item ml-auto">
                    <Link className="nav-link navbar-brand" to="/portfolio">
                    <img src={portfolioImage} width="41" height="40" className="d-inline-block align-top nav-img" alt="Smiley looking into the distance" loading="lazy" />
                    My Portfolio</Link>
                </li>
                
                <li className="nav-item ml-auto">
                    <Link className="nav-link navbar-brand" to="/contact">
                    <img src={contact} width="31" height="40" className="d-inline-block align-top nav-img" alt="Smiley punching a number into a cellphone" loading="lazy" />
                    Contact Me</Link>
                    </li>
                </ul>
            </div>  
        </nav>        
    )
}