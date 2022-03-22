import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css'
import Slider from "./slider";
import SecondSlider from "./secslider";
import HomeRow from "./homerow";
import BottomSlider from "./bottomslider";

export default function Home() {
  return (
      <div>
        
        <Navbar/>
        <Slider/>
        <SecondSlider/>
        <HomeRow/>
        
        <BottomSlider/>
      </div>
    );
  }

