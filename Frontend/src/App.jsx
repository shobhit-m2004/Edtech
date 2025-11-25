import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="login" element={<Login />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={"Page Not Found"} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
