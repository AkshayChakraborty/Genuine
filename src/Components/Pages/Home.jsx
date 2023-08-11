import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { getAbout } from '../Api/FetchApi';

const Home = () => {
  const[title, setTitle]=useState([]);

  const getAllData=async()=>{
    const response=await getAbout();
    setTitle(response?.data)
  }

  useEffect(()=>{
    getAllData()
  },[])

  console.log(title);

  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div>
  <section id="hero" className="d-flex justify-content-center align-items-center">
    <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
      <h1>Learning Today,<br />Leading React.Js</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="courses.html" className="btn-get-started">Get Started With Login</a>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
{
  title?.map((item,index)=>{
    return(
      <>
      <h3>{item?.title}</h3>
        <p className="fst-italic">
          {item?.description}
        </p>
        <ul>
          <li><i className="bi bi-check-circle" /> {item?.feature1}</li>
          <li><i className="bi bi-check-circle" /> {item?.feature2}</li>
          <li><i className="bi bi-check-circle" /> {item?.feature3}</li>
        </ul>
        <p>
          {item?.conclusion}
        </p>
      </>
    )
  })
}   
      </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Mentor?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt" />
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt" />
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images" />
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>{/* End .content*/}
          </div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  
</div>
{/* <div>
  <div id="preloader" />
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div> */}

      </>
  )
}

export default Home