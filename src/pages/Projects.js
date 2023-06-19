import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import SingleProject from './SingleProject'

const Projects = () => {

const [details, setDetails]=useState([]);

function getData(){
    fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
            
}
 
 useEffect(()=>{
    getData()
 },[])
  

    return (
        <>
<div className="detail_container">
    <div className="detail_content">
        {
            details.map((x)=>{
                return(
                    <>
                    <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src={x.products.img}
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.products.title}</h5>
                                        <p className="card-text">{x.products.price}</p>
                                        <a href="#" target={'_blank'} className="btn btn-primary"></a>
                                    </div>
                                </div>
                    </>
   
                )
            })
        }
    </div>
</div>

            <section className="project py-5" id="project">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">

                            <div className="col-lg-8 mx-auto">
                                <h2>Projects I have Done </h2>
                            </div>
                            <div className="col-xl-12 d-flex justify-content-between card-area gap-5">

                                <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                        <Link to="/singleproject">
                                            <button className='btn btn-primary'>see My Project Details</button>
                                        </Link>
                                    </div>
                                </div>


                                <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                        <a href="#" className="btn btn-primary">See My Project</a>
                                    </div>
                                </div>
</div>


                            <div className="col-md-12 d-flex justify-content-between card-area gap-5 ">
                                <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                        <a href="#" className="btn btn-primary">See My Project</a>
                                    </div>
                                </div>


                                <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                        <a href="#" className="btn btn-primary">See My Project</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Projects
