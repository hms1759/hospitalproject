import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/AboutUs/AboutUs";
import Service from "./Component/Service/Service";
import ContactUs from "./Component/ContactUs/ContactUs";
function UiPage() {
  return (
    <div className="main_container">
      <div className="middle_container">
   
        <Router>
           <Navbar/>
            <Routes>
     
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </Router>
      
      </div>
    </div>
  );
}

export default UiPage;
