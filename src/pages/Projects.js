import React from 'react'
import project from './Data'
import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <section className='py-3 container'>
                        <div className="row justify-content-center">
                            {project.map((item, index) => (
                                <ProjectCard
                                    projectImg={item.projectImg}
                                    projectName={item.projectName}
                                    desc={item.desc}
                                    technologies={item.technologies}
                                    url={item.url}
                                    item={item}
                                    key={index}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Projects
