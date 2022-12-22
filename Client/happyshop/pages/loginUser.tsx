import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
function loginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (body) => {
    axios
      .post("http://localhost:4000/users/login", body)
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

    <div className="signup">
      <h2 className="text-center">SignIn Now</h2>
      <hr />
      <div className="form-group">
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="inputss" placeholder="Email Address" />
      </div>
      <div className="form-group">
        <input onChange={(e) => setPassword(e.target.value)} type="text" className="inputss" placeholder="Password"  />
      </div>
      <button onClick={() => SignIn({ password, email })} className="btn btn-outline-light">
        SignIn
      </button>
    </div>


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
}

export default loginUser;
