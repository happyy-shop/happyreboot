import Footer from "./Footer";

import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import Link from "next/link";

const signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = (body) => {
    axios
      .post("http://localhost:4000/users/register", body)
      .then((res) => {
        localStorage.setItem("token", res.data);
        window.location.href = "/Home";
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div className="bar">
        <div>
          <h1 className="name">Happy-Shop</h1>
        </div>
      </div>
      <section className="welecom">
        <div className="container">
          <div className="row">
            <center>
              <div className="signup">
                <h2 className="text-center">Signup Now</h2>

                <div className="form-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="inputss"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="inputss"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="inputss"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group text-center">
                  <button
                    onClick={() => signup({ username, password, email })}
                    className="btn btn-outline-light"
                  >
                    {" "}
                    SignUp{" "}
                  </button>
                </div>

                <div className="active1">
                  <h4>already have an account ?</h4>

                  <button className="btn btn-outline-light">
                    <Link href="/loginUser">Login User</Link>
                  </button>

                  <button className="btn btn-outline-light">
                    <Link href="/loginAdmin">Login Admin</Link>
                  </button>
                </div>
              </div>
            </center>
          </div>
        </div>
      </section>
      <div className="foot">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <ul>
                <p>
                  Bloc B24, Elgazala Technopark, Raoued, Gouvernorat de
                  l'Ariana, 2088 Ariana – Tunisie. contact@RBK.tn
                </p>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <li>
                <a href="#">Contact us</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
