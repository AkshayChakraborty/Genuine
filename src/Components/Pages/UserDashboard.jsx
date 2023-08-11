import React from 'react'
import { useAuth } from '../Auth/Auth';
import './User.css'

const UserDashboard = () => {
    const [auth, setAuth] = useAuth();

  return (
      <>
      <div style={{ marginTop: '55px',marginBottom:'45px', paddingTop: '53px'}} className="container dashboard">
                {/* <div className="row">  */}
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="card-wrap">                  
                    <div className="card mb-3" style={{ maxWidth: '640px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img style={{width:'100%'}} src="assets/img/testimonials/testimonials-2.jpg" alt="..." />

                            </div>
                            <div className="col-md-8 card-bg">
                              <div style={{ textAlign: 'left' }} className="card-body ">
                                    <h2 className="card-title">Name : {(auth?.user?.name).toUpperCase()}</h2>
                                  <hr/>
                                    <p className="card-text">Email : {auth?.user?.email}</p>
                                    <p className="card-text">Phone : {auth?.user?.phone}</p>
                                    <p className="card-text">Address : {auth?.user?.address}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
              </div>
              </div>
      </>
  )
}

export default UserDashboard