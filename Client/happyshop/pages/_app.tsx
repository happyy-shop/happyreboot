import "../styles/globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import type { AppProps } from 'next/app'
import Layout from './layout'
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function App({ Component, pageProps, ...appProps }: AppProps)  {
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


  const getContent = () => {
    if (!user && (["/"].includes(appProps.router.pathname))){ return <Component {...pageProps} />;}
else if(user.admin==true && ( (["/admin"].includes(appProps.router.pathname)))) { 
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
} 
else if (user.admin==false &&(["/Home"].includes(appProps.router.pathname)) || (["/Profile"].includes(appProps.router.pathname)))   
    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return getContent()
}
