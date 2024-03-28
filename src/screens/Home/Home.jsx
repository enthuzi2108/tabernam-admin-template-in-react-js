/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'

import bannerBackground from "../../assets/images/bannerBackground.jpg";
import bannerImage from "../../assets/images/banner.jpg";
import './Home.css'
import { FiArrowRight } from "react-icons/fi";

const home = () => {
  return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">

      <div className="home-text-section">
        <h1 className="primary-heading">
        COVID-19 Updates</h1>
        <p className="primary-text">
        Get the latest cases of the Coronavirus from the countries.
        </p>
      </div>
      <div className="home-image-section">
        <img src={bannerBackground} alt="" />
      </div>
    </div>
  </div>
  )
}

export default home