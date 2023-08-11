import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../Auth/Auth";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";

// ----- for user dasboard

const Head = () => {
  const [auth, setAuth] = useAuth();
  const handlelogout = () => {
    toast.success("Logout Successfully");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <NavLink to="">
              <img src={logo}></img>
            </NavLink>
          </h1>
          <NavLink to="/" className="logo me-auto">
            {/* <img src="assets/img/logo.png" alt="" className="img-fluid" /> */}
          </NavLink>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink to="/" className="active">
                  Home
                </NavLink>
              </li>
              {!auth.user ? (
                <>{/* Hide Navbar */}</>
              ) : (
                <>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/trainers">Trainers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {!auth?.user ? (
            <>
              {" "}
              <NavLink to="/login" className="get-started-btn">
                Login
              </NavLink>
              <NavLink to="/register" className="get-started-btn">
                SignUp
              </NavLink>
            </>
          ) : (
              <>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                
                <NavLink style={{
                  color: "red",textShadow:"2px 2px 12px " }}><b>{(auth.user.name).toUpperCase()} </b></NavLink>
                <div>&nbsp;</div>
                <div>&nbsp;</div>


              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggl"
                  href="/"
                  role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    style={{ width: "35px", borderRadius: "21px",  }}
                    src="assets/img/testimonials/testimonials-2.jpg"
                    alt="..."
                  />
                  </button>
                <div style={{ textAlign: "center",marginRight:"70px" }} className="dropdown-menu">
                  <Link to={"/userdashboard"} className="dropdown-item" aria-labelledby="dropdownMenuButton" href="userdetail">
                    {(auth.user.name).toUpperCase()}
                  </Link>
                  <Link
                      style={{ color: "gray", }}
                    className="dropdown-item"
                    to="/userdashboard"
                  >
                    {auth.user.email}
                  </Link>
                  <NavLink
                    to="/login"
                    onClick={handlelogout}
                    className="dropdown-item"
                    href="#"
                  >
                    <AiOutlineLogout/> {" "}
                    LogOut
                  </NavLink>
                </div>
              </div>
              {/* <NavLink
                onClick={handlelogout}
                to="/login"
                className="get-started-btn"
              >
                Logout
              </NavLink> */}
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Head;
