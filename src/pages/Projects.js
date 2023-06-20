import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import SingleProject from './SingleProject'

const Projects = () => {

const [details, setDetails]=useState([]);

function getData(){
   axios.get("https://6437a3340c58d3b145754311.mockapi.io/crud-api/ValidationForm")
   .then((res)=>{
    setDetails(res.data)
   })    
}
 useEffect(()=>{
    getData()
 },[])
  

    return (
        <>

            <section className="project py-5" id="project">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-11  text-center mx-auto col-12">

                            <div className="col-lg-8 mx-auto">
                                <h2>Projects I have Done </h2>
                            </div>
                         

                            {
            details.map((x)=>{
                return(
                    <>
                    <div className="card_project col-md-12 d-flex justify-content-between gap-5">
                    <div className="card">
                                    <img className="card-img-top"
                                        src={x.img1}
                                        alt="Card image cap" 
                                        />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title1}</h5>
                                        <p className="card-text">{x.text1}</p>
                                        <a href="#" target={'_blank'} className="btn btn-primary">
                                            <button className='btn btn-primary'>See Project</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top"
                                        src={x.img2}
                                        alt="Card image cap" 
                                        />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title2}</h5>
                                        <p className="card-text">{x.text2}</p>
                                        <a href="#" target={'_blank'} className="btn btn-primary">
                                            <button className='btn btn-primary'>See Project</button>
                                        </a>
                                    </div>
                                </div>

                             </div>
                            
                             

                              
                    </>
   
                )
            })
        }
                    </div>  
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Projects
