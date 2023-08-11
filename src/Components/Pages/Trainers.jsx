import React, { useEffect, useState } from 'react'
import Common from './Common'
import { getTrainerDetails } from '../Api/FetchApi'

const Trainers = () => {
  const [user, setUser] = useState([])

  const getuserData = async () => {    
    const result = await getTrainerDetails()
    setUser(result)

  }

  useEffect(() => {
    getuserData()
  }, [])

  return (
      <>
          <Common value={"Our Trainers"} />
          
       {/* ======= Trainers Section ======= */}
       <main id="main" data-aos="fade-in">

<section id="trainers" className="trainers">
  <div className="container" data-aos="fade-up">
    <div className="row" data-aos="zoom-in" data-aos-delay={100}>

      {
        user.data?.map((serial, index) => {
          return (
            <>

              <div  className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src={serial.Image_url} className="img-fluid" alt />
                 <h4>{serial.name}</h4>
                 <p style={{textAlign:'justify',padding:'5px 10px'}}>{serial.details}</p>
                  <div className="member-content">                           

                    <div className="social">
                      <a href="https://twitter.com/"><i className="bi bi-twitter" /></a>
                      {/* <a href><i className="bi bi-facebook" /></a> */}
                      <a href="https://github.com/"><i className="bi bi-github"/></a>
                      <a href=""><i className="bi bi-linkedin" /></a>
                      <a href=""></a>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )
        })



      }
      
    </div>
  </div>
</section>
</main>
      </>
  )
}

export default Trainers