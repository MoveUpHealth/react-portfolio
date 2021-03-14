import React from "react";
import Mailto from "../../components/Mail";
import Resume from "../../images/resumeJessicaTax.pdf";
import "./style.css";

function Footer() {
    
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid justify-content-center">
                <p className="footer-links">
                    <a href="https://www.linkedin.com/in/jessica-tax-move-up-health/" target="_blank" className="nav-link footer" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                    <a href="https://github.com/MoveUpHealth" target="_blank" className="nav-link footer" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                    <a href={Resume} target="_blank" className="nav-link footer" rel="noopener noreferrer">
                        Resume
                    </a>                 
                </p>
            </div>
            <div className="container-fluid justify-content-center footer-contact">
                <p>
                    <Mailto className="email" email="jessica@moveuphealth.com" subject="Message From React Portfolio">
                    jessica@moveuphealth.com &nbsp; &nbsp; &#8214; &nbsp; &nbsp;
                    </Mailto>
                </p>
                <p>916.532.0366</p> 
                
            </div>
            <div className="container-fluid justify-content-center footer-copyright">
                <p>&copy; Copyright 2020</p> 
            </div>
        </nav>
    )
};

export default Footer