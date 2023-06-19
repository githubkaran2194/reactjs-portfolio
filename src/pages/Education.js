import React from 'react'

const Education = () => {
  
  return (
    <>
 <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 col-12">
          <h2 className="mb-4">Experiences</h2>

          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2022</span>
              </div>
              <div className="timeline-info">
                <h3><span>Internship as a Frontend Developer</span><small> CodeKul Pvt Ltd. </small></h3>
                <p>[11/2022 -Present]
                </p>
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span></span>
              </div>
              <div className="timeline-info">
                {/* <!-- <h3><span></span><small></small></h3> --> */}
                <p>
                  ➢ Assisted in the development of user interfaces for web applications using HTML, 
                  CSS, and JavaScript.
                  ➢ Collaborated with the development team to ensure code quality and project deadlines 
                  were met.
                  ➢ Assisted in the development of a React.js application, collaborating with the team to 
                  implement new features and improve user experience.
                  .</p>
              </div>
            </div>

        
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <h2 className="mb-4 mobile-mt-2">Educations</h2>

          <div className="timeline">
            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2017</span>
              </div>
              <div className="timeline-info">
                <h3><span>10th</span><small>New English School Khandala.</small></h3>
                <p> Tal: shrirampur Dist: Ahmednagar.
                </p>
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2019</span>
              </div>
              <div className="timeline-info">
                <h3><span>12th </span><small>C.D.Jain College of Commerce.</small></h3>
                <p>
                   Shrirampur.</p>
              </div>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-yr">
                <span>2022</span>
              </div>
              <div className="timeline-info">
                <h3><span>B.COM</span><small>C.D.Jain College of Commerce.</small></h3>
                <p>Shrirampur</p>
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

export default Education