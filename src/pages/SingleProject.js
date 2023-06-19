import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SingleProject = () => {
  return (
    <>
  <div className="card col-xl-6" >
                                    <img className="card-img-top"
                                        src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
                                        alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                            card's content.</p>
                                        <Link to="/singleProject">
                                            <button className='btn btn-primary'>see My Project Details</button>
                                        </Link>
                                    </div>
                                </div>
                                <Outlet/>

    </>
  )
}

export default SingleProject