import React, { useReducer } from "react";
import Common from "./Common";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";
import "./blog.css";
import BlogSkeleton from "./BlogSkeleton";

const Blog = () => {
  const [intialvlaue,setIntialvlaue] = useState(4);
  const [alldata, setAlldata] = useState([]);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  const [imgProfile, setImgProfile] = useState([]);

  const [newsQuery, setnewsQuery] = useState("all");

  const [loading,setLoading]=useState(true)

  // ----------- Search Function ---------------------

  const filterdata = (search, alldata) => {
    const filtered = alldata.filter((item) => {
      return (
        item?.title && item?.title.toLowerCase().includes(search.toLowerCase()) ||
        item?.description && item?.description.toLowerCase().includes(search.toLowerCase())
      );
    });
    return filtered;
  };

  const handleSearch = () => {
    const data = filterdata(search, alldata);
    setSearchFilter(data);
    console.log("FilterData ----", data);
  };
  //--------------------- News Api ----------------------------

  const apikey = "e20fff5cdcdd46b684e0855473bbf38f";
  const apiUrl =
    "https://newsapi.org/v2/everything?q=" +
    newsQuery +
    "&from=2023from=2023-08-11&sortBy=publishedAt&apiKey=" +
    apikey;
  const getData = async () => {
    const data = await axios.get(apiUrl);
    setAlldata(data?.data.articles);
    setSearchFilter(data?.data.articles);
    setLoading(false)
  };
  const imgapi = async () => {
    const imge = await axios.get("https://api.github.com/users");
    setImgProfile(imge?.data);
  };
  useEffect(() => {
    getData();
    imgapi();
  }, [newsQuery]);
console.log("Intial Value",intialvlaue);
  //-------------------- Profile Pic -----------------

  // if (loading) {
  //   return (<>
  //   <BlogSkeleton/>
      
  //   </>)
  // }
  return (
    <>
      <Common value={"Blog"} />

      {/*  ------------- Sidebar -------------- */}
      <div id="boxes">
        <div id="rightbox">
          <br />
          <br />

          {/* ----------- Search Button ----------- */}
          <h3>
            <b>Search</b>
          </h3>
          <br />

          <div>
            <div className="input-group">
              <div className="form-outline">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button
                onClick={handleSearch}
                style={{ width: "50px", height: "38px" }}
                type="button"
                className="btn btn-primary"
              >
                <i className="bx bx-search"></i>
              </button>
            </div>
          </div>
          {/*----------- Search Button ENd ----------- */}
          <br />
          <br />
          <div className="col-lg-11">
            <div className="sidebar" data-aos="fade-left">
              <h4 className="sidebar-title">
                <b>Categories</b>
              </h4>
              <div className="sidebar-item categories">
                <br />

                
                  <NavLink style={{fontSize:"20px",color:"blue"}} 
                    onClick={() => setnewsQuery("all")}
                    className=""
                  >
                    <b>All</b><span> ({alldata.length})</span>
                  </NavLink>
                


                <br />
                <br />

                
                  <NavLink style={{fontSize:"20px"}}
                    onClick={() => setnewsQuery("bitcoin")}
                    className=""
                  >
                    Bitcoin <span> ({alldata.length})</span>
                  </NavLink>
                
                <br />
                <br />

                
                  <NavLink style={{fontSize:"20px"}}
                    onClick={() => setnewsQuery("health")}
                    className=""
                  >
                    Health <span> ({alldata.length})</span>
                  </NavLink>
                
                <br />
                <br />

                
                  <NavLink style={{fontSize:"20px"}}
                    onClick={() => setnewsQuery("bank")}
                    className=""
                  >
                    Bank <span> ({alldata.length})</span>
                  </NavLink>
                
                <br />
                <br />

                
                  <NavLink style={{fontSize:"20px"}}
                    onClick={() => setnewsQuery("tech")}
                    className=""
                  >
                    Tech <span> ({alldata.length})</span>
                  </NavLink>
                
                <br />
                <br />
              </div>
            </div>
          </div>

          

          <div className="col-lg-11">
            <div className="sidebar" data-aos="fade-left">
              <h4 className="sidebar-title">
                <b>Recent Posts</b>
              </h4>
              <div className="sidebar-item categories">
                <br />
                
                {alldata?.slice(0, 4).map((item) => {
                  return (
                    <>
                      <Link>
                        <ul className="list-group list-group-light">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                            
                              <img
                                src={item?.urlToImage || ""}
                                onError={(e) =>
                                  (e.target.src =
                                    "https://random.imagecdn.app/500/150")
                                }
                                alt=""
                                style={{ width: 75, height: 65 }}
                                />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">
                                  {(item?.title).substring(0, 30)}
                                </p>
                                <p className="text-muted mb-0">
                                  {(item?.content).substring(0, 40)}..
                                  <Link to={""}>
                                    {" "}
                                    <button
                                      style={{
                                        width: "58px",
                                        height: "18px",
                                        fontSize: "8px",
                                      }}
                                      type="button"
                                      class="btn btn-warning btn-rounded btn-sm"
                                    >
                                      Read More
                                    </button>
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                          <br />
                        </ul>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            </div>
            
        </div>
      </div>
        {/* //------------End Side Bar -------------- */ }
      {loading ? <BlogSkeleton /> : <>
      <section id="courses" className="courses">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            {searchFilter?.slice(0, intialvlaue).map((item, index) => {
              return (
                <>
                  <div className="col-lg-6 col-md-4 d-flex align-items-stretch mt-4 mt-md-4">
                    <div
                      style={{ paddingLeft: "40px" }}
                      className="course-item"
                    >
                      <img
                        style={{ height: "250px", width: "500px" }}
                        src={item?.urlToImage || ""}
                        onError={(e) =>
                          (e.target.src = "https://random.imagecdn.app/500/150")
                        }
                        className="img-fluid"
                        alt="img"
                      />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h4>{item.source.name}</h4>
                          <p className="">{item?.publishedAt}</p>
                        </div>
                        <h3>
                          <Link to={"/blog-details"} target="_blank">
                            {(item?.title).substring(0, 30)}
                          </Link>
                        </h3>
                        <p>{(item?.content).substring(0, 95)}</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                          <div className="trainer-profile d-flex align-items-center">
                            <img
                              target="_blank"
                              src={imgProfile[index]?.avatar_url}
                              onError={"https://random.imagecdn.app/500/150"}
                              className="img-fluid"
                              alt="img"
                            />

                            <span>{item?.author || "Genuine"}</span>
                          </div>
                          <Link to={item?.url} target="_blank">
                            {" "}
                            <button
                              style={{
                                width: "120px",
                                height: "40px",
                                fontSize: "15px",
                              }}
                              type="button"
                              className="btn btn-primary btn-rounded btn-sm"
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <br/>
            <br/>
          </div>
        </div>
        </section>
      <button onClick={() =>setIntialvlaue(intialvlaue+4)} style={{marginLeft:"380px",boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",width:"233px"}} type="buttonn" class="btn btn-danger btn-rounded">Load More</button>
      <br/>
      </>}  
     

    </>
  );
};

export default Blog;
