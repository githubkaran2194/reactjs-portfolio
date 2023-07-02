import React from 'react'

const ProjectCard = (props) => {

  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card project p-0 overflow-hidden h-100 shadow" style={{ width: "18rem;" }}>
          <img src={props.projectImg} alt="Card image cap" className='card-img-top ' height={250} />
          <div className="card-body">
            <h5 className="card-name">{props.projectName}</h5>
            <p className="card-desc">{props.desc}</p>
            <p className="card-techno">{props.technologies}</p>
            <a href={props.url} target={'_blank'}>
            <button className='btn btn-primary'>View</button>
            </a>
           
            </div>
            </div>
            </div>
        </>
        )
}

        export default ProjectCard