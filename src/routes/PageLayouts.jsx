import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BlogView from "../views/BlogView.jsx";
import CityStateView from "../views/CityStateView.jsx";
import Home from "../components/home/Home.jsx";

const PageLayouts = () => {
  const location = useLocation();

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/state-city" element={<CityStateView />} />
      </Routes>

      {location.pathname !== "/blog" && <Footer />}
    </div>
  );
};

const PageLayoutsWrapper = () => {
  return (
    <Router>
      <PageLayouts />
    </Router>
  );
};

export default PageLayoutsWrapper;
