//@ts-nocheck
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ifError } from "assert";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [error, setError] = useState(false);
  const [alluser, setalluser] = useState([]);
  const router = useRouter();

  async function handleSubmit() {
    try {
      const user = await axios
        .post("http://localhost:4000/users/register", {
          name: username,
          email: email,
          password: password,
          isAdmin: false,
        })
        .then(() => {
          alert("Account has been created");
          router.push("/SimpleUserLayout");
        });
    } catch (error) {
      console.log(error.response.data.message);
      setErrormessage(error.response.data.message);
      setError(true);
    }
  }

  return (
    <div className="login">
      <img
        className=" login_image"
        src="https://sikepo.acehtamiangkab.go.id/images/pages/login.png"
      ></img>
      <span className="loginTitle">Sign in</span>
      <form className="loginForm">
        <label>User name</label>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />

        <label>Email</label>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <span
          onClick={() => {
            handleSubmit();
          }}
          className="loginButton"
        >
          Sign in
        </span>
        <div>
          {error ? <p style={{ color: "red" }}>{errormessage}</p> : null}{" "}
        </div>
      </form>
      <button
        onClick={() => {
          router.push("/Login");
        }}
        className="loginRegisterButton"
      >
        <span>Log In</span>
      </button>
    </div>
  );
}
