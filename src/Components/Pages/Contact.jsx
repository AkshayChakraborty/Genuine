import React, { useState } from 'react'
import Common from './Common'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { addUser } from '../Api/FetchApi'
import img1 from './contact.png'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: "",
}

const Contact = () => {
  const [user, setUser] = useState(initialValues)
  const [error, setError] = useState({})
  const navigate = useNavigate()


  //for validate form
  const validation = () => {
    let error = {}
    if (!user.name) {
      error.name = "Name is Required"
    }
    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }

    if (!user.phone) {
      error.phone = "Phone is Required"
    }

    if (!user.subject) {
      error.subject = "Subject is Required"
    }

    if (!user.message) {
      error.message = "Message is Required"
    }

    return error
  }


  //onChange Validation
  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })

    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }

    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@Phone is Required" })
        setUser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setUser({ ...user, phone: value })
      }
    }

    if (name === "subject") {
      if (value.length === 0) {
        setError({ ...error, subject: "@Subject is Required" })
        setUser({ ...user, subject: "" })
      } else {
        setError({ ...error, subject: "" })
        setUser({ ...user, subject: value })
      }
    }

    if (name === "message") {
      if (value.length === 0) {
        setError({ ...error, message: "@Message is Required" })
        setUser({ ...user, message: "" })
      } else {
        setError({ ...error, message: "" })
        setUser({ ...user, message: value })
      }
    }

  }

  const SubmitInfo = async (e) => {
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    if (Object.keys(ErrorList).length === 0) {
      await addUser(user)
      navigate('/')
      toast.success('We Will Contact You Shortly')

    }
  }
  return (
    <>
      <Common value={"Contact Us"} />
      <div data-aos="fade-up">
              <iframe style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d972.7547852318667!2d88.42710132508307!3d22.57542740554807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687197621292!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
            </div>
      
      <section id="contact" className="contact" style={{background:`url(${img1})`}}  >
            
            
            <div className="container" data-aos="fade-up"  >
              <div className="row mt-5" >
                
                <div className="col-lg-4"  >
                  <div className="info" style={{backgroundColor:'rgba(0, 0, 0, 0)'}}>
                    <div className="address"  >
                      <i className="bi bi-geo-alt" />
                      <h4 style={{color:'white'}} >Location:</h4>
                      <b style={{color:'white'}} >Unit No- 7E, 7th Floor, BENGAL ECO INTELLIGENT PARK, Plot No. 3, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</b>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4 style={{color:'white'}} >Email:</h4>
                      <b style={{color:'white'}} >genuine4@gmail.com</b>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4 style={{color:'white'}} >Call:</h4>
                      <b style={{color:'white'}}>+91 9833 646 233</b>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">

                  {/* form section */}

                  <form onSubmit={SubmitInfo} action="forms/contact.php" method="post" role="form" className="php-email-form" style={{backgroundColor:'rgba(0, 0, 0, 0)'}}>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input style={{borderRadius:'20px'}} type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={user.name} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input style={{borderRadius:'20px'}} type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={user.email} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input style={{borderRadius:'20px'}} type="phone" className="form-control" name="phone" id="phone" placeholder="Your Phone Number" value={user.phone} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input style={{borderRadius:'20px'}} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={user.subject} onChange={e => postUserData(e)} />
                      <span style={{ color: "red", marginLeft: "24px" }}> {error.subject} </span>
                    </div>
                    <div className="form-group mt-3">
                      <textarea style={{borderRadius:'20px'}} className="form-control" name="message" rows={5} placeholder="Message" value={user.message} onChange={e => postUserData(e)} />
                      <span style={{ color: "red", marginLeft: "24px" }}> {error.message} </span>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
            
          </section>

    </>
  )
}

export default Contact