import "../styles/globals.css";
import "../styles/Login.css";
import "../styles/Footer.css";
import "../styles/Slider.css";
import "../styles/productStyling.css";
import "../styles/ProductDetails.css";
import "../styles/Nav.css";
import "../styles/cardstyle.css";
import "../styles/aside.css";
import "../styles/edit.css";
import "../styles/addProduct.css";
import "../styles/aside.css";
import "../styles/style.css";
import "../styles/team.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// import type { AppProps } from 'next/app'
import Layout from './layout'
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const [user, setUser] = useState('')
  console.log(user)
  useEffect(() => {
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
  }, [])


  const getContent = () => {
    if (!user && (["/edit/[id]"].includes(appProps.router.pathname)) || (["/"].includes(appProps.router.pathname)) || (["/loginUser"].includes(appProps.router.pathname)) || (["/loginAdmin"].includes(appProps.router.pathname))) {
      

      return <Component {...pageProps} />;
    }
    else if (user.admin == true && ((["/AllUsers"].includes(appProps.router.pathname)) || (["/HomeAdmin"].includes(appProps.router.pathname)) || (["/AllProductAdmin"].includes(appProps.router.pathname)) || (["/jeansadmin"].includes(appProps.router.pathname)) || (["/shoesadmin"].includes(appProps.router.pathname)) || (["/T-SHIRTadmin"].includes(appProps.router.pathname)) || (["/AddProduct"].includes(appProps.router.pathname)) || (["/edit/[id]"].includes(appProps.router.pathname)))) {

      return (
        <>
          <Component {...pageProps} />{" "}
        </>
      );
    }
    else if (user.admin == false && (["/Home"].includes(appProps.router.pathname)) || (["/contact"].includes(appProps.router.pathname)) || (["/AllProducts"].includes(appProps.router.pathname)) || (["/jeans"].includes(appProps.router.pathname)) || (["/shoes"].includes(appProps.router.pathname)) || (["/T-SHIRT"].includes(appProps.router.pathname)) || (["/Profile"].includes(appProps.router.pathname)) || (["/Card"].includes(appProps.router.pathname)) || (["/[id]"].includes(appProps.router.pathname)))
      return (
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      );
  };

  return getContent()
}
