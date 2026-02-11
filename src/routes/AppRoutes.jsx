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
import ActivateAccount from "../components/ActivateAccount";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      {/* Public Routes Starts */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        {/* Public Routes Ends */}

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 className="text-6xl text-center my-10 font-bold text-red-600">
              404 Not Found
            </h1>
          }
        />
      </Route>

      {/* Private Routes Starts */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      {/* Private Routes Ends */}
    </Routes>
  );
};

export default AppRoutes;
