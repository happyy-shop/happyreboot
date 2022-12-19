import React from "react";
import Link from "next/link";

export default function Navbar() {
  // const router = useRouter();

  // const handelLogOut = () => {
  //   localStorage.removeItem("payload.name");
  //   router.push("/Login");
  // };

  return (
    <div className="container-fluid bg-dark mb-30">
      <meta charSet="utf-8" />
      <title>MultiShop - Online Shop Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      {/* Libraries Stylesheet */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block"></div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
              <Link href="/Card">
                <i className="fas fa-shopping-cart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              data-toggle="dropdown"
            >
              My Account
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Sign in
              </button>
              <button className="dropdown-item" type="button">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          ></nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                Shop
              </span>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
             <div className="navbar-nav mr-auto py-0">
                <Link href="/Home" className="nav-item nav-link">
                  Home
                </Link>
                <Link href="/AllProducts" className="nav-item nav-link">
                  AllProducts
                </Link>
                <Link href="/Profile" className="nav-item nav-link">
                  Profile
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <a href="" className="btn px-0">
                  <i className="fas fa-heart text-primary" />
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: 2 }}
                  >
                    0
                  </span>
                </a>
                <a href="" className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary" />
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: 2 }}
                  >
                    0
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    //   <div>
    //     <>
    //       <link
    //         rel="stylesheet"
    //         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    //       />
    //       <div className="navbar navbar-inverse">
    //         <div className="container-fluid">
    //           <div className="row">
    //             <div className="col-lg-12">
    //               <div className="navbar-header">
    //                 <a href="#" className="navbar-brand">
    //                   .......
    //                 </a>

    //                 <a
    //                   onClick={() => {
    //                     router.push("/Home");
    //                   }}
    //                   href="#"
    //                   className="navbar-brand"
    //                 >
    //                   Happy Shop
    //                 </a>
    //               </div>
    //               <div className="navbar-collapse collapse" id="mobile_menu">
    //                 <ul className="nav navbar-nav">
    //                   <li className="active">
    //                     <a
    //                       onClick={() => {
    //                         router.push("/Home");
    //                       }}
    //                     >
    //                       Home
    //                     </a>
    //                   </li>

    //                   {/* <select class=" genre">
    //                     <option> --- </option>
    //                     <option id="men"> Men </option>
    //                     <option id="Women"> Women </option>
    //                   </select> */}

    //                   <li>
    //                     <a
    //                       onClick={() => {
    //                         router.push("/AllProducts");
    //                       }}
    //                     >
    //                       All Products{" "}
    //                     </a>
    //                   </li>
    //                   <li>
    //                   <Link href = "/T-SHIRT">

    //                      T-Shirt{" "}

    //                   </Link>
    //                   </li>
    //                   <li>
    //                   <Link href = "/shoes">

    //                       Shoes{" "}

    //                    </Link>
    //                   </li>
    //                   <li>
    //                   <Link href = "/jeans">

    //                       Jeans{" "}

    //                    </Link>
    //                   </li>

    //                   <li>
    //                     <a
    //                       onClick={() => {
    //                         router.push("/Team");
    //                       }}
    //                     >
    //                       About Us
    //                     </a>
    //                   </li>
    //                 </ul>
    //                 <ul className="nav navbar-nav">
    //                   <li>
    //                     <form action="" className="navbar-form">
    //                       <div className="form-group">
    //                         <div className="input-group">
    //                           <input
    //                             type="search"
    //                             name="search"
    //                             id=""
    //                             placeholder="Search Anything Here..."
    //                             className="form-control"
    //                           />
    //                           <span className="input-group-addon">
    //                             <span className="glyphicon glyphicon-search" />
    //                           </span>
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="logo"
    //                         src="https://assets.coingecko.com/coins/images/12561/small/GMC-favicon-Asset-200x200.png"
    //                       ></img>
    //                     </form>
    //                   </li>
    //                 </ul>
    //                 {/* <img
    //                   onClick={() => {
    //                     router.push("/Card");
    //                   }}
    //                   className="cardimg"
    //                   src="https://www.pngfind.com/pngs/m/453-4531594_icon-05-min-clip-art-shopping-bag-hd.png"
    //                 ></img> */}

    //                 <ul className="nav navbar-nav navbar-right">
    //                   <li>
    //                     <a href="#">
    //                       <span className="glyphicon glyphicon-user" /> Profile
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       onClick={() => {
    //                         handelLogOut();
    //                       }}
    //                       href="#"
    //                       className="dropdown-toggle"
    //                       data-toggle="dropdown"
    //                     >
    //                       <span className="glyphicon glyphicon-log-in" />
    //                       Logout <span className="caret" />
    //                     </a>
    //                     <ul className="dropdown-menu"></ul>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   </div>
  );
}
