import React from "react"
import profile from "../../images/profile.jpg"
import "./style.css"

function Home() {
    return (
      <main className="wrapper" id="aboutme">

        <h2>Jessica Tax</h2>
        <hr className="line" />
  
        
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-12">
           <div className="card mb-3">
            <div className="row no-gutters">
  
              <div className="col-md-3 main-card">
                <img id="profile" src={profile} className="card-img" alt="profile" />
              </div>
            
            <div className="col-md-9 main-card" style={{clear: "both"}}>
              <div className="card-body" style={{paddingBottom: "10px !important"}}>
                <div className="jumbotron main-card" style={{ paddingBottom: "0"}}>
                <h1 className="display-4" style={{marginTop: "-50px"}}>Hello, world!</h1>
                  <p className="lead" >Welcome, and thank you for taking the time to look at my portfolio.</p>
                  <hr className="my-4" />
                  <p className="card-text">In the fall of 2016 after a frustrating experience with GoDaddy's website builder, I decided to enroll in a beginning website development course at
                    my local junior college. While the process of learning HTML and CSS was not easy, there was a strong
                     sense of accomplishment anytime I figured out how to make things work. As I continue to learn and develop my coding skills, it is that 
                     sense of accomplishment that keeps me motivated.
                  </p>
                  <p className="card-text">My first major project was desigining the website for my personal training business. As the business has grown, the website has changed and expanded to encompass a new location and virtual services.</p>
                  
                </div>
              </div>
            </div>
          
          </div>              
        </div>
        </div>
        </div>
        </div>
        <hr className="line" />
      </main>
    )
}

export default Home