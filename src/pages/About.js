import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
         <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">

        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome to <span className="mobile-block">my portfolio </span></small>
            <h1 className="animated animated-text">
              <span className="mr-2">Hey folks, I'm </span>
              <div className="animated-info">
                <span className="animated-item">karan chavan</span>
                <span className="animated-item">Web Designer</span>
                <span className="animated-item">UI Specialist</span>
              </div>
            </h1>

            <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces
              and web development.</p>

            <div className="custom-btn-group mt-4">
              <Link href="#" className="btn mr-lg-2 custom-btn">Download Resume</Link>
              <Link to="/contact" className="btn custom-btn custom-btn-bg custom-btn-link" data-hover="Contact">Get a free
                quote</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-12">
          <div className="about-image svg">
            <img src="https://img.freepik.com/free-photo/portrait-happy-excited-man-holding-laptop-computer_171337-12121.jpg" className="img-fluid" alt="svg image" />
          </div>
        </div>

      </div>
    </div>
  </section>

    </div>
  )
}

export default About