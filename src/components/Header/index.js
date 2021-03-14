import React from "react";
import aboutme from "../../images/aboutme.png"
import contact from "../../images/contact.png"
import logo from "../../images/logo.png"
import portfolioImage from "../../images/portfolio.png"
import "./style.css"

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    
            <a className="name navbar-brand" href="index.html">
                <img src={logo} height="85" className="d-inline-block align-top nav-img" alt="J logo" />
            Code by Jess</a>
  
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                
                <li className="nav-item ml-auto active">
                    <a className="nav-link navbar-brand" href="index.html">
                    <img src={aboutme} width="63" height="40" className="d-inline-block align-top nav-img" alt="Smiley point to self" loading="lazy" />
                    About Me <span className="sr-only">(current)</span></a>
                </li>
                
                <li className="nav-item ml-auto">
                    <a className="nav-link navbar-brand" href="portfolio.html">
                    <img src={portfolioImage} width="41" height="40" className="d-inline-block align-top nav-img" alt="Smiley looking into the distance" loading="lazy" />
                    My Portfolio</a>
                </li>
                
                <li className="nav-item ml-auto">
                    <a className="nav-link navbar-brand" href="contact.html">
                    <img src={contact} width="31" height="40" className="d-inline-block align-top nav-img" alt="Smiley punching a number into a cellphone" loading="lazy" />
                    Contact Me</a>
                    </li>
                </ul>
            </div>  
        </nav>        
    )
}