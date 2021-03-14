import React, { useState } from "react";
import Mailto from "../../components/Mail"
import running from "../../images/running.jpg"
import "./style.css"

function Contact() {

    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [content, setContent] = useState("");
    

    const onChangeContactName = (e) => {
        const contactName = e.target.value;
        setContactName(contactName)
    }

    const onChangeContactEmail = (e) => {
        const contactEmail = e.target.value;
        setContactEmail(contactEmail)
    }

    const onChangeContent = (e) => {
        const content = e.target.value;
        setContent(content)
    }

    return (
        <main className="wrapper" id="contact">

          <h2>Contact Me</h2>
          <hr className="line" />

          <div className="container contact-container">
          <div className="row">
              <div className="col-md-4">
                  <img  src={running} height="400px" className="contact-img" alt="Running and smiling" />
              </div>
              <div className="col-md-6 offset-md-2 col-lg-7 offset-lg-1 align-self-center">
              <form>
                  
                  <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="name" onChange={onChangeContactName} value={contactName} className="form-control" id="nameInput" />
                  </div>

                  <div className="form-group">
                  <label htmlFor="emailAddress">Email address</label>
                  <input type="email" onChange={onChangeContactEmail} value={contactEmail} className="form-control" id="emailInput" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                      <label htmlFor="textArea">Your Message:</label>
                      <textarea onChange={onChangeContent} value={content} className="form-control" id="textAreaInput" rows="3" />
                  </div>
                  <Mailto 
                    className="btn btn-primary submit" 
                    email="jessica@moveuphealth.com" 
                    subject="Contact Form: Coding Portfolio" 
                    contactName={contactName} 
                    contactEmail={contactEmail} 
                    body={content}>
                        Submit
                  </Mailto>
              </form>
              </div>
            </div>
          </div>
          <hr className="line" />
      </main>
    )
}

export default Contact