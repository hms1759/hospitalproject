import React, { Component } from 'react';
import BottomSlider from '../Home/bottomslider';
import ServiceSlider from './ServiceSlider';
import './Service.css'
import Navbar from '../Navbar/Navbar';

export default class Service extends Component {
  render() {
    return <div>
      
      <Navbar/>
      <ServiceSlider/>
      <BottomSlider/>
    </div>;
  }
}
