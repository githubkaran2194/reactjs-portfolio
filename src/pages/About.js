import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";
import web from '../New folder/Web-designer-1024x821.webp'
const About = () => {
  return (
    <div>
         <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">

        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome to <span className="mobile-block">my portfolio </span></small>
            <h1>Hello
            <br />
             I'm <pan style={{color:"red"}}>Karan Chavan</pan>
             </h1>
             <h3>
             <Typewriter
 options={{
                strings: ["React JS Developer",
                           "Front End Developer"
                 ],
                autoStart: true,
                loop : true
 }}
 />
             </h3>
           
         
            


        

            <div className="custom-btn-group mt-4">
              <Link href="#" className="btn mr-lg-2 custom-btn">Download Resume</Link>
              <Link to="/contact" className="btn custom-btn custom-btn-bg custom-btn-link" data-hover="Contact">Get a free
                quote</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-12">
          <div className="about-image svg">
            <img src={web} className="img-fluid" alt="svg image" />
          </div>
        </div>

      </div>
    </div>
  </section>

    </div>
  )
}

export default About