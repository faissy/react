import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import App from './App';
import About from './About';
import Home from './Home';
import Login from './Login';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <>
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:fname" element={<About />} /> 
        <Route exact path="/login" element={<Login />} /> 

      </Routes>
  </BrowserRouter> 
 
  </>,
  document.getElementById('root')
);
