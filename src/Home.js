import React from "react";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Card from "./Card";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";


const Home = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Demo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="" ><NavLink to="/">Home</NavLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=""> <NavLink to="/about/hh">About</NavLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=""> <NavLink to="/Login">Login</NavLink></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="col-sm-4">
          <Card title={Sdata[0].sname} imgurl={Sdata[0].imgurl}
            description={Sdata[0].description} />
        </div>
        <div class="col-sm-4">
          <Card title="Dark" imgurl="https://wallpapercave.com/uwp/uwp1939164.jpeg"
            description="Every Legend Have Beginning" />
        </div>
        <div class="col-sm-4">
          <Card title={Sdata[1].sname} imgurl={Sdata[1].imgurl}
            description={Sdata[1].description} />

        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <Card title="Shawn Mendes Aesthetics" imgurl="https://wallpapercave.com/uwp/uwp1939186.jpeg"
            description="Shawn Mendes Aesthetics" />
        </div>
        <div class="col-sm-4">
          <Card title="Quotes" imgurl="https://wallpapercave.com/uwp/uwp1939177.jpeg"
            description="Quotes..Quotes..Quotes" />
        </div>
        <div class="col-sm-4">
          <Card title="Dark" imgurl="https://wallpapercave.com/uwp/uwp1939164.jpeg"
            description="Every Legend Have Beginning" />
        </div>
        <div class="col-sm-4">
          <Card title="Shawn Mendes Aesthetics" imgurl="https://wallpapercave.com/uwp/uwp1939186.jpeg"
            description="Shawn Mendes Aesthetics" />
        </div>
      </div>

    </>
  );
}

export default Home;