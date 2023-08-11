import { Routes, Route, Navigate } from "react-router-dom";
import Head from "./Components/Header/Head";
import Home from "./Components/Pages/Home";
import Trainers from "./Components/Pages/Trainers";
import Events from "./Components/Pages/Events";
import Pricing from "./Components/Pages/Pricing";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ResetPas from "./Components/Auth/ResetPass";
import Blog from "./Components/Pages/Blog";
import UserDashboard from "./Components/Pages/UserDashboard";
import Courses from "./Components/Pages/Courses";
function App() {
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  // ---------- 🌐 Public Route ----------
  const publicRoute = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/resetpass",
      element: <ResetPas />,
    },
  ];

  // ---------- 🔐 Private/Proected Route ----------
  const privateRoute = [
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/trainers",
      element: <Trainers />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path:"/courses",
      element:<Courses/>
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/userdashboard",
      element: <UserDashboard/>,
    },
  ];
  return (
    <>
      <Head />
      <Routes>
        {publicRoute?.map((route, index) => {
          return (
            <>
              <Route
                key={index + 1}
                exact
                path={route?.path}
                element={route?.element}
              />
            </>
          );
        })}
        {privateRoute?.map((proute, index) => {
          return (<>
            <Route key={index+1} exact path={proute?.path} element={<PrivateRoute>{proute?.element}</PrivateRoute>} />
          </>)
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
