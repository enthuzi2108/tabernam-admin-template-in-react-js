/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext, useEffect } from "react";
import {
  Dashboard,
  PageNotFound,
  Faq,
  Resources,
  Profile,
  Login,
  // Register,
} from "../screens";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import BaseLayout from "../layout/BaseLayout";

import AreaTop from "../components/dashboard/areaTop/AreaTop";
import Home from "../screens/Home/Home";

import Table from "../screens/Table/Table";

const privateRoutes = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 
 
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <Router>
   
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        

        {/* Routes inside BaseLayout */}
        <Route element={<BaseLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/table" element={<Table />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
        />
      </button>
    </Router>
  );
};

export default privateRoutes;
