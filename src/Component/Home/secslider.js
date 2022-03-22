import React from "react";

export default function SecondSlider() {
  return (
    <div className="container_slider3">
      <div className="container_row_column">
        <div className="container_text">
          <h3>
            <p>Here is the little more about</p>
            <p> our plan</p>
          </h3>
          <a href="#">
            <i>Learn more about us..............</i>{" "}
          </a>
        </div>
      </div>
      <div className="container_column_row">
        <div className="container_slider con1">
          <div className="container_family">
            <div className="family_text">
              <h2 className="fh2">Individual & Family </h2>
              <h6 className="fh6">
                Get more saving, more perks and get better
              </h6>
              <h6 className="fh6">
                care. with little deposit, you and your family{" "}
              </h6>
              <h6 className="fh6">
                be care fore... in our individual and family plan
              </h6>
            </div>
            <div className="family_image"></div>
            <div className="btn submit">
              <a href="#"> apply for family and Individual plan..</a>
            </div>
          </div>
        </div>
        <div className="container_slider con2">
          <div className="container_Business">
            <div className="Business_text">
              <h2 className="fb2">Business </h2>
              <h6 className="fb6">Get the best health insurance for</h6>
              <h6 className="fb6">all the member of your team at very </h6>
              <h6 className="fb6">affordable rate... health is wealth</h6>
            </div>
            <div className="Business_image"></div>
            <div className="btn2 submit">
              <a href="#"> apply for Business plan..</a>
            </div>
          </div>
        </div>
        <div className="container_slider con3">
          <div className="container_MedADvice">
            <div className="MedADvice_text">
              <h2 className="fm2">Medical Advice </h2>
              <h6 className="fm6">Save more and stay alive white easy and </h6>
              <h6 className="fm6">personalized care  at very affordable rate </h6>
            </div>
            <div className="MedADvice_image"></div>
            <div className="btn3 submit">
              <a href="#"> apply for Business plan..</a>
            </div>
          </div>
        </div>
      </div >
      <div className="sideBeam">
        <h4>
        Try our self diagonises system without login ?
        </h4>
        <div className="tryDiag">  <a href="#"> Yes.. I will try</a> </div>

      </div>
    </div>
  );
}
