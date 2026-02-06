import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Products from "../pages/Products/Products";
import MainLayout from "../Layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../pages/Register";

const AppRoutes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} /> */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
