import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


    function handleName(e) {
        let name = e.target.value;
        if (name.length < 3) {
            setErrorName(true)
        } else {
            setErrorName(false);
        }

    }

    function handleEmail(e) {
        let email = e.target.value;
        if (!email.match(emailRegex)) {
            setErrorEmail(true)
        }
        else {
            setErrorEmail(false);
        }
    }



        function handleSubmit(e) {
            e.preventDefault()
            let name = e.target[0].value
            if (name.length < 3) {
                setErrorName(true)
            }
            else {
                setErrorName(false)
            }
            let email = e.target[1].value
            if (!email.match(emailRegex)) {
                setErrorEmail(true)
            }
            else {
                setErrorEmail(false)
            }

            if((name.length < 3) && (!email.match(emailRegex))){
                alert("Invalid ")
            }
            else{
                alert("Submitted")
            }
    
            axios.post("https://6437a3340c58d3b145754311.mockapi.io/API/projectsAPI",{
                name : name,
                email : email,
                message : message
            })
            .then((res)=>{
                console.log(res)
            })

            

    }
    return (
        <>
            <section className="contact py-5" id="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 mr-lg-5 col-12">
                            <div className="google-map w-100">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15111.259184293865!2d73.8554340489154!3d18.76180786806361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9f585ac70d1%3A0x7269f7854109659!2sChakan%2C%20Maharashtra%20410501!5e0!3m2!1sen!2sin!4v1687150426257!5m2!1sen!2sin" width="600" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                                <div className="contact-info-item">
                                    <h3 className="mb-3 text-white">Say hello</h3>
                                    <p className="footer-text mb-0">+91 9850502194</p>
                                    <p><a href="mailto:hello@company.co">karanchavan2194@gmail.com</a>
                                        <p>kothrud, Pune</p>
                                    </p>

                                </div>

                                <ul className="social-links">
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="left" title='Linkedin'>
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="left" title='Instagram'>
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" data-toggle="tooltip" data-placement="left" title='Facebook'>
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="contact-form">
                                <h2 className="mb-4">Interested to work together? Let's talk</h2>

                                <form action="" method="get" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" value={name} onChange={handleName} required />
                                        </div><br />
                                        {errorName ? <span style={{ color: "red" }}>Name must be Greater then 3 Character</span> : ""}

                                        <div className="col-lg-6 col-12">
                                            <input type="email" className="form-control" name="email" placeholder="Email" id="email" value={email} onChange={handleEmail} required />
                                        </div>
                                        {errorEmail ? <span style={{ color: "red" }}>Invalid Email</span> : ""}

                                        <div className="col-12">
                                            <textarea name="message" rows="6" className="form-control" id="message" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
                                        </div>


                                        <div className="ml-lg-auto col-lg-5 col-12">
                                            <input type="submit" className="form-control submit-btn" value="Send"  />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default Contact