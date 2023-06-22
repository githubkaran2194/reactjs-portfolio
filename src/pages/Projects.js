import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from '../New folder/create.jpg'
import brightintech from '../New folder/brightintech.jpg'


const Projects = () => {

// const [details, setDetails]=useState([]);

// function getData(){
//    axios.get("https://6437a3340c58d3b145754311.mockapi.io/API/projectsAPI")
//    .then((res)=>{
//     setDetails(res.data)
//    })    
// }
//  useEffect(()=>{
//     getData()
//  },[])
  

    return (
        <>

            <section className="project py-5" id="project">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12  text-center mx-auto col-md-12">

                            <div className="col-lg-8 mx-auto fw-bolder fst-italic">
                                <h2 className='project-header'>Projects I have Done </h2>
                            </div>
                         
{/* 
                            {
            details.map((x)=>{
                return( */}
                    <>
                    <div className="card_project  d-flex justify-content-between gap-5 col-12">
                    <div className="container col-6 col-md-6 col-sm-6 col-xl-6">
                    <div className="card">
                    <img className="card-img-top"
                                        src={img}
                                        alt="Card image cap" 
                                        width={500}
                                        />
                                    <div className="card-body">
                                        <h5 className="card-title">Add product CRUD React App</h5>
                                        <p className="card-text">Create The create function allows users to create a new record in the database Read The read function is similar to a search function Update The update function is used to modify existing records that exist in the database Delete the Delete function is used to delete a product</p>
                                        <a href="https://add-product-app.vercel.app" target={'_blank'} className="btn btn-primary">
                                            <button className='btn btn-primary btn-project'>See Project</button>
                                        </a>
                                    </div>  
                                </div>
                    </div>
                                  

                                 <div className="card">
                                    <img className="card-img-top"
                                        src={brightintech}
                                        alt="Card image cap" 
                                        width={500}
                                        />
                                    <div className="card-body">
                                        <h5 className="card-title">
I have a BrightInTech Company Website 
                                        </h5>
                                        <p className="card-text">
Technology use ReactJs , HTML CSS, BOOTSTRAP
                                        </p>
                                        <a href="#" target={'_blank'} className="btn btn-primary">
                                            <button className='btn btn-primary'>See Project</button>
                                        </a>
                                    </div>
                                </div> 
                             </div>
                            
                             

                              
                    </>
{/*    
                )
            })
        } */}
                    </div>  
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Projects
