import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/login" element={<Login />} /> 
      </Routes>
  </BrowserRouter> 

{/*
<header className="container-fluid">

<section>
  <div class="row">
<div class="col-sm-1">
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Menu</button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header">
  <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">

</div>
</div></div>
<div class="col-sm-9"> 
    <Home />
  </div>
</div>
</section>
</header>
*/}
</>

  );
}

export default App;
