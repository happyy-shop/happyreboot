import React from "react";
import { useRouter } from "next/router";
import Logo from "../public/Happy Shop Log-2.png"; 
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const handelLogOut = () => {
    localStorage.removeItem("payload.name");
    router.push("/Login");
  };

  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="navbar-header">
                  <a href="#" className="navbar-brand">
                    .......
                  </a>

                  <a
                    onClick={() => {
                      router.push("/Home");
                    }}
                    href="#"
                    className="navbar-brand"
                  >
                    Happy Shop
                  </a>
                </div>
                <div className="navbar-collapse collapse" id="mobile_menu">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a
                        onClick={() => {
                          router.push("/Home");
                        }}
                      >
                        Home
                      </a>
                    </li>

                    {/* <select class=" genre">
                      <option> --- </option>
                      <option id="men"> Men </option>
                      <option id="Women"> Women </option>
                    </select> */}

                   
                    
                    <li>
                      <a
                        onClick={() => {
                          router.push("/AllProducts");
                        }}
                      >
                        All Products{" "}
                      </a>
                    </li> 
                    <li>
                    <Link href = "/T-SHIRT">
                        
                       T-Shirt{" "}
                    
                    </Link>
                    </li>  
                    <li>
                    <Link href = "/shoes">
                        
                        Shoes{" "}
                     
                     </Link>
                    </li> 
                    <li>
                    <Link href = "/jeans">
                        
                        Jeans{" "}  
                     
                     </Link>
                    </li>

                    <li>
                      <a
                        onClick={() => {
                          router.push("/Team");
                        }}
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li>
                      <form action="" className="navbar-form">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              type="search"
                              name="search"
                              id=""
                              placeholder="Search Anything Here..."
                              className="form-control"
                            />
                            <span className="input-group-addon">
                              <span className="glyphicon glyphicon-search" />
                            </span>
                          </div>
                        </div>
                        <img
                          className="logo"
                          src="https://assets.coingecko.com/coins/images/12561/small/GMC-favicon-Asset-200x200.png"
                        ></img>
                      </form>
                    </li>
                  </ul>
                  <img
                    onClick={() => {
                      router.push("/Card");
                    }}
                    className="cardimg"
                    src="https://www.pngfind.com/pngs/m/453-4531594_icon-05-min-clip-art-shopping-bag-hd.png"
                  ></img>

                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-user" /> Profile
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          handelLogOut();
                        }}
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="glyphicon glyphicon-log-in" />
                        Logout <span className="caret" />
                      </a>
                      <ul className="dropdown-menu"></ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
