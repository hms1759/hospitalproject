import React, { Component } from 'react';
import BottomSlider from '../Home/bottomslider';
import Navbar from '../Navbar/Navbar';
import AboutHome from './AboutHome';
import './Aboutus.css'
import AboutUs_Slider from './about_slider/AboutUs_Slider';

export default function AboutUs() {
  return (
  <div className='about_body_cont'>
    
    <Navbar/>
    <AboutHome/>
    <AboutUs_Slider/>
     <BottomSlider/> 
    </div>
    );
  }

