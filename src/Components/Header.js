import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/All.css'


const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md ">
        <div class="container">
        <Link className="navbar-brand" to="/">PortFolio</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link"><span data-hover="About">About</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link"><span data-hover="Projects">Projects</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/education" className="nav-link"><span data-hover="Education">Education</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link"><span data-hover="Contact">Contact</span></Link>
              </li>
            </ul>

            <ul className="d-flex justify-content-between">

              <a href="https://www.linkedin.com/in/karan-chavan2194" target="_blank" className="social-links" data-toggle="tooltip" data-placement="left" title='Linkedin'>
                <i className="fa-brands fa-linkedin"></i>
              </a>


              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='Instagram'>
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='facebook'>
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="https://github.com/githubkaran2194" className="social-links" target="_blank" data-toggle="tooltip" data-placement="left" title='Github'>
                <i className="fa-brands fa-github"></i>
              </a>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header