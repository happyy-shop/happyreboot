
// 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import type { AppProps } from 'next/app'
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react'
import axios from 'axios'



function Profile ({ Component, pageProps, ...appProps }: AppProps)   {
   
    const[user,setUser]=useState('')
    console.log(user)
  useEffect (()=> { 
    const token = localStorage.getItem("token");
      if (token) {
        const user = jwt(token);
  
        if (!user) {
          localStorage.removeItem("token");
        } else {
          axios
            .get(`http://localhost:4000/users/${user.email}`)
            .then((res) => {
              setUser(res.data);
            });
        }
      }
    },[])
  return (
    <>
    <section className="bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mb-4 mb-sm-5">
        <div className="card card-style1 border-0">
          <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="..."
                />
              </div>
               <div className="col-lg-6 px-xl-10">
                <ul className="list-unstyled mb-1-9">
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Position:
                    </span>{" "}
                    a
                  </li>
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Experience:
                    </span>{" "}
                    10 Years 
                  </li> 


                
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Email:
                    </span>{" "}
                    b 
                  </li>
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Website:
                    </span>{" "}
                    www.example.com 
                  </li>
                  <li className="display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Phone:
                    </span>{" "}
                    507 - 541 - 457 
                  </li>
                  
                </ul>
                <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                  <li>
                    <a href="#!">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>

              </div>
              <div className='wadi3'>
             <input ></input>
            <input className='inputs'></input>
            <input className='inputs'></input>
            <input className='inputs'></input>
            <input className='inputs'></input>
            </div>
            </div>
          </div>
          <button>update</button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Profile