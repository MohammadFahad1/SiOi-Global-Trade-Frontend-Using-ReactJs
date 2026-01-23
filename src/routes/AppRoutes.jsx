import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Products from "../pages/Products/Products";
import MainLayout from "../Layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AppRoutes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
