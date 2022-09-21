import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [HelloTxt, setHelloTxt] = useState([]);

  const [saveemail, Setsaveemail] = useState();


  const submitForm = async (e) => {
    e.preventDefault();
    alert("Email" + email + "Password" + password);

    try {
      const response = await fetch("https://app7.batapkapps.com/NRSD/Frapi/LoadDepotCustomersByID?depotID=" + email);
      console.log(response);

      const Data = await response.json();
      setHelloTxt(Data);
      //console.log(Data);
      //console.log(await response.json());
      //console.log("Values After Post Here" + HelloTxt);
      Setsaveemail(email);


    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div>Login Section Here</div>

      <form action="" onSubmit={submitForm}>
        <div class="mb-3">
          <label htmlFor="email" for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="text" name="email" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label htmlFor="password" for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" name="password" value={password} class="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div>
        <h1>{email}</h1>
        <h1>{password}</h1>
        {
          saveemail


        }

        <table class="table">


          <thead>
            <tr>

              <th scope="col">Dealer No</th>
              <th scope="col">Messers</th>

            </tr>
          </thead>
          <tbody>



            {
              HelloTxt.map((curElem) => {
                return (

                  <tr>
                    <td>{curElem.DealerNo}</td>
                    <td>{curElem.Messers}</td>
                  </tr>

                )
              })
            }

          </tbody>
        </table>
      </div>


    </>
  )
}

export default Login;