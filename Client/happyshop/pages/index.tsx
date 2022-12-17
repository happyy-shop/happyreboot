
import React,{useState} from 'react'
import axios from 'axios'
import jwt from 'jwt-decode'
const signup = () => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signup=(body)=>{
        axios.post('http://localhost:4000/users/register',body).then(res=>{
          localStorage.setItem("token", res.data)
          window.location.href='/Home'

        } ).catch(err=>alert(err)
        )
    } 
    const SignIn=(body)=>{
        axios.post('http://localhost:4000/users/login',body).then(res=>{
          localStorage.setItem("token", res.data)
          window.location.href='/Home'

        }
        ).catch(err=>alert(err)
        )
    }
  return (
    <>
  <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Landing PAGE Html5 Template" />
  <meta name="keywords" content="landing,startup,flat" />
  <meta name="author" content="Made By GN DESIGNS" />
  <title>Vortex - Startup Landing Page</title>
  {/* // PLUGINS (css files) // */}
  <link
    href="assets/js/plugins/bootsnav_files/skins/color.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/animate.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/bootsnav.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/bootsnav_files/css/overwrite.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/owl-carousel/owl.carousel.css"
    rel="stylesheet"
  />
  <link href="assets/js/plugins/owl-carousel/owl.theme.css" rel="stylesheet" />
  <link
    href="assets/js/plugins/owl-carousel/owl.transitions.css"
    rel="stylesheet"
  />
  <link
    href="assets/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css"
    rel="stylesheet"
  />
  {/*// ICONS //*/}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  {/*// BOOTSTRAP & Main //*/}
  <link
    href="assets/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link href="assets/css/main.css" rel="stylesheet" />

      
  {/*//** Banner** //*/}
  <section id="home">
    <div className="container">
      <div className="row">
        {/* Introduction */}
        <div  className="col-md-6 caption">
          <h1>Welcome To Vortex</h1>
          <h2>
            I am
            <span className="animated-text" />
            <span className="typed-cursor" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            quibusdam. Sit, quas tempora quia officia!
          </p>
       
        </div>
        {/* Sign Up */}
        <div className="col-md-5 col-md-offset-1">
          {/* <form className="signup-form"> */}
            <h2 className="text-center">Signup Now</h2>
            <hr />
            <div className="form-group">
            
            </div>
            <div className="form-group">
              <input
              onChange={e=>setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email Address"
               
              />
            </div>
            <div className="form-group">
              <input
              onChange={e=>setUsername(e.target.value)}

                type="text"
                className="form-control"
                placeholder="User Name"
               
              />
            </div>
            <div className="form-group">
              <input
              onChange={e=>setPassword(e.target.value)}

                type="text"
                className="form-control"
                placeholder="Password"
               
              />
            </div>
            <div className="form-group text-center">
              <button onClick={()=>signup({username,password,email})} className="btn btn-outline-light">
                SignUp
              </button> <button onClick={()=>SignIn({username,password,email})} className="btn btn-outline-light">
                SignIn
              </button>
            </div>
          
        </div>
      </div>
    </div>
  </section>
  
  {/*======================================== 

     Modal

    ========================================*/}
  {/* Modal */}
  
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
</>

  )
}

export default signup

// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import AdminUserLayout from "./AdminUserLayout";
// import SimpleUserLayout from "./SimpleUserLayout";
// import Link from "next/link";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   let [errormessage, setErrormessage] = useState("");
//   let [error, setError] = useState(false);

//   const router = useRouter();

//   async function handleSubmit() {
//     try {
//       //   event.preventDefault();
//       const loginRequest = await axios
//         .post("http://localhost:4000/users/login", {
//           email: email,
//           password: password,
//         })
//         .then((response: any) => {
//           const encoded_Payload_Part_InToken = response.data.token
//             .toString()
//             .split(".")[1];
//           const decoded_Payload_Part_InToken = atob(
//             encoded_Payload_Part_InToken
//           );
//           const payload = JSON.parse(decoded_Payload_Part_InToken);

//           //   console.log( "decoded ",decoded_Payload_Part_InToken);
//           //   console.log( "encoded ",encoded_Payload_Part_InToken);
//           //   console.log( "payload ",payload);
//           console.log("payload admin ", payload.isAdmin);
//           console.log("payload id ", payload.id);
//           //   console.log( "payload name ",payload.name);

//           localStorage.setItem("IS_ADMIN", payload.isAdmin);
//           localStorage.setItem("USER_ID", payload.id);
//           localStorage.setItem("USER_NAME", payload.name);
//         })
//         .then(() => {
//           displayComponent();
//         });
//     } catch (error) {
//       console.log(error.response.data.message);
//       setErrormessage(error.response.data.message);
//       setError(true);
//     }
//   }

//   const displayComponent = () => {
//     let GetRole = localStorage.getItem("IS_ADMIN");
//     let Parsed_Get_Role = JSON.parse(GetRole);

//     console.log("test", Parsed_Get_Role);
//     if (Parsed_Get_Role === true) {
//       return router.push("/AdminUserLayout");
//     } else if (Parsed_Get_Role === false) {
//       return router.push("/SimpleUserLayout");
//     }
//   };

//   return (
//     <div className="login">
//       <img
//         className=" login_image"
//         src="https://sikepo.acehtamiangkab.go.id/images/pages/login.png"
//       ></img>

//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Username</label>
//         <input
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//         />
//         <label>Password</label>
//         <input
//           onChange={(event) => {
//             setpassword(event.target.value);
//           }}
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//         />
//         <span
//           onClick={() => {
//             handleSubmit();
//           }}
//           className="loginButton"
//         >
//           Login
//         </span>
//         <div>
//           {error ? <p style={{ color: "red" }}>{errormessage}</p> : null}{" "}
//         </div>
//       </form>
//       <button
//         onClick={() => {
//           router.push("/Signin");
//         }}
//         className="loginRegisterButton"
//       >
//         <span>Sigin</span>
//       </button>
//     </div>
//   );
// }
