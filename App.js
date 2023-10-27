import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import PageImage from "./PageImage";
import NewNavbar from "./NewNavbar";
import Actualfooter from "./Footer";
import Footer from "./footer2";
import ArticlePic from "./ArticlePic";
import TutorialPic from "./TutorialPic";
import PlanPage from "./PlansPage";
import TutorialButton from "./TutorialButton";
import Login from './Login';
import Signup from "./SignUp";
import Welcome from "./Welcome";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ <PageImage /> } />              
          <Route index element={ <Navbar /> } />                    
          <Route path="/articlepic" element={<ArticlePic />} />     
          <Route path="/tutorialpic" element={<TutorialPic />} />   
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />    
          <Route path="/Welcome" element={<Welcome />} />   
          <Route path="/planpage" element={<PlanPage />} /> 
        </Routes>

        <NewNavbar/>
        <Actualfooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
