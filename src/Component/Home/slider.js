import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import father from '../../image/father1.jpg'

export default function Slider() {
  return (
      <div>
        <div className="row_container">
          <div className="colored_path">
            <div className="colored_path_content">
              <div className="content1 ">
                <div className="content1_new ">
                  <h5>New</h5>
                </div>
                <div className="content1_content"></div>
                <h6>Get the Latest update of coronavirus,Covid19</h6>
              </div>
              <div className="content2">
                <h1>
                  Protecting you <p>and your Family</p>{" "}
                </h1>
              </div>
              <div className="content3">
                <p>Your health and wellbeing is very important to us. when it </p>
               <p>comes to staying well,physically, emotionally and </p>

                <p>financially, we are with you all th way</p>
              </div>
            </div>
          </div>
          <div className="white_path">
              <div className="white_path_content">
                  
        <img src={father} className="App_logo" alt="logo" />
                </div>

            </div>
        </div>
      </div>
    );
  }

