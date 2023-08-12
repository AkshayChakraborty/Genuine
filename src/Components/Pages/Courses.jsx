import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../Component/Layout/Layout'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import CardSkeleton from './CardSkeleton'

const Courses = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true)
  const [intialvlaue,setIntialvlaue] = useState(6);

  const placeholderImage = "http://via.placeholder.com/640x360";

  const BaseUrl = 'https://newsapi.org'
  const getNews = async () => {
    const response = await axios.get(`${BaseUrl}/v2/everything?q=apple&from=2023from=2023-08-11&sortBy=publishedAt&apiKey=e20fff5cdcdd46b684e0855473bbf38f`)
    setNews(response?.data.articles)

    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }
  useEffect(() => {
    getNews()
  }, [])

  const loadMore= ()=>{
    setIntialvlaue(intialvlaue+6)
  }

  return (
    <>
      {/* <Layout> */}
        <div>
          <div className="breadcrumbs">
            <div className="container">
              <h2>Courses</h2>
              <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
            </div>
          </div>

          <section id="courses" className="courses">
            <div className="container" data-aos="fade-up">
              <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                {
                  loading
                    ?
                    <>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    </>
                    :
                    news?.slice(0, intialvlaue)?.map((newsData, index) => {
                      return (
                        <>
                          <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                            <div className="course-item">
                              <img src={newsData.urlToImage
                                ? newsData.urlToImage
                                : placeholderImage} className="card-img-top" alt="..." />
                              <div className="course-content">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <h4>Web Development</h4>
                                  <p className="price">$169</p>
                                </div>
                                <h3><a href="course-details.html">Website Design</a></h3>
                                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                <div className="trainer d-flex justify-content-between align-items-center">
                                  <div className="trainer-profile d-flex align-items-center">
                                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt />
                                    <span>Antonio</span>
                                  </div>
                                  <div className="trainer-rank d-flex align-items-center">
                                    <i className="bx bx-user" />&nbsp;50
                                    &nbsp;&nbsp;
                                    <i className="bx bx-heart" />&nbsp;65
                                  </div>
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
          {
            news?.length >intialvlaue ?(<button onClick={loadMore} style={{marginLeft:"530px",boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",width:"233px",}} type="buttonn" class="btn btn-danger btn-rounded">Load More</button>):null
          }
          
        </div>
      {/* </Layout> */}
    </>
  )
}

export default Courses


