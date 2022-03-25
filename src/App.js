import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/AboutUs/AboutUs";
import Service from "./Component/Service/Service";
import SignIn from "./Component/Log/SignIn/SignIn";
import ContactUs from "./Component/ContactUs/ContactUs";
import SignUp from "./Component/Log/SignUp/SignUp";
import FetchMyData from "./Component/Log/SignIn/fetch";
import IndexDiagnose from "./Component/Diagnose/Index";
function App() {
  return (
    <div className="main_container">
      <div className="middle_container">
     
        <Router>
            <Routes>
     
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/ContactUs" element={<ContactUs />} />
             <Route path="/SignIn" element={<SignIn />} /> 
             <Route path="/SignUp" element={<SignUp />} /> 
             <Route path="/fetch" element={<FetchMyData />} /> 
             <Route path="/diagnose" element={<IndexDiagnose/>} /> 
          </Routes>
        </Router>
      
      </div>
    </div>
  );
}

export default App;
