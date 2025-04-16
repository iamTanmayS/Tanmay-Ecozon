import React from "react";
import "./App.css";
import Header from "../src/Component/Header";
import Home from "../src/Component/Home";
import NavBar from "../src/Component/navbar";
import Checkout from "../src/Component/Checkout"
import Login from "../src/Component/Login";
import Headergreen from "../src/Component/Headergreen";
import Homegreen from "../src/Component/Homegreen";
import NavBarg from "../src/Component/navbargreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationSection from "../src/Component/Educationsection";
import SustainabilityReportsSection from "../src/Component/Sustainability";
import Footer from "../src/Component/Footer";
import Orders from "../src/Component/Orders";
import Thanks from "../src/Component/thanks";
import SellerSection from "../src/Component/SellerSection";
import Submitted from "../src/Component/Submitted";
import Dashboard from "../src/Component/Dashboard";
import Feedback from "../src/Component/feedback";
import ProductDetails from "../src/Component/ProductDetails";
import ProductDetails1 from "../src/Component/ProductDetails1";
import FSubmitted from "../src/Component/Feedbacksubmitted";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/greenovation" element={<Homegreen/>}/> */}
          <Route path="/feedbacksubmitted" element={[<Headergreen/>, <NavBarg/>, <FSubmitted/>]}/>
          <Route path="/feedback" element={[<Headergreen/>, <NavBarg/>, <Feedback/>, <Footer/>]}/> 
          <Route path="/submitted" element={[<Headergreen/>, <Submitted/>]}/> 
          <Route path="/seller" element={[<Headergreen/>, <NavBarg/>, <SellerSection/>, <Footer/>]}/> 
          <Route path="/thanks" element={[<Header />, <Thanks/>]}/> 
          <Route path="/orders" element={[<Header />, <Orders/>, <Footer/>]}/>
          <Route path="/sustainability" element={[<Headergreen/>,<NavBarg/>, <SustainabilityReportsSection/>, <Footer/>  ]}/>
          <Route path="/education" element={[<Headergreen/>,<NavBarg/>, <EducationSection/>, <Footer/>  ]}/>
          <Route path="/green" element={[<Headergreen/>,<NavBarg/>, <Homegreen/>, <Footer/>  ]}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/checkout" element={[<Header />, <Checkout/>, <Footer/>  ]}/>
          <Route path="/" element={[<Header />, <NavBar/>, <Home />, <Footer/>  ]}/>
          <Route path="/dashboard" element={[<Header />, <NavBarg/>, <Dashboard/>]} />
          <Route path="/product" element={[<Headergreen />, <NavBarg />, <ProductDetails />, <Footer />]}/>
          <Route path="/product1" element={[<Headergreen />, <NavBarg />, <ProductDetails1 />, <Footer />]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

