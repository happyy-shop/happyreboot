import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
  return (
    <>
    <div className="container-fluid mb-3">
  <div className="row px-xl-5">
    <div className="col-lg-8">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade mb-30 mb-lg-0"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#header-carousel" data-slide-to={1} />
          <li data-target="#header-carousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div
            className="carousel-item position-relative active"
            style={{ height: 430 }}
          >
            <img
              className="position-absolute w-100 h-100"
              src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671285641/happyshop/carousel-1_mt7jow.jpg"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                  Men Fashion
                </h1>
                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                </p>
                <a
                  className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="AllProducts"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="carousel-item position-relative"
            style={{ height: 430 }}
          >
            <img
              className="position-absolute w-100 h-100"
              src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671286702/happyshop/carousel-2_qmoivl.jpg"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                  Women Fashion
                </h1>
                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                  Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                  stet amet amet ndiam elitr ipsum diam
                </p>
                <a
                  className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="carousel-item position-relative"
            style={{ height: 430 }}
          >
            <img
              className="position-absolute w-100 h-100"
              src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671286702/happyshop/carousel-2_qmoivl.jpg"
              style={{ objectFit: "cover" }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                  Kids Fashion
                </h1>
                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                  Lorem rebum magna amet lorem magna erat diam stet. Sadips duo
                  stet amet amet ndiam elitr ipsum diam
                </p>
                <a
                  className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="product-offer mb-30" style={{ height: 200 }}>
        <img className="img-fluid" src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671285719/happyshop/carousel-3_po3lyg.jpg" alt="" />
        <div className="offer-text">
          <h6 className="text-white text-uppercase">Save 20%</h6>
          <h3 className="text-white mb-3">Special Offer</h3>
          
        </div>
      </div>
      <div className="product-offer mb-30" style={{ height: 200 }}>
        <img className="img-fluid" src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671286702/happyshop/carousel-2_qmoivl.jpg" alt="" />
        <div className="offer-text">
          <h6 className="text-white text-uppercase">Save 20%</h6>
          <h3 className="text-white mb-3">Special Offer</h3>
         
        </div>
      </div>
    </div>
  </div>
</div>

    <div>
    <div className="container-fluid pt-5 pb-3">
  <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
    <span className="bg-secondary pr-3">Featured Products</span>
  </h2>
  <div className="row px-xl-5">
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            Product Name Goes Here
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>$123.00</h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            Product Name Goes Here
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>$123.00</h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star-half-alt text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            Product Name Goes Here
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>$123.00</h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star-half-alt text-primary mr-1" />
            <small className="far fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
   
   
   
  </div>
</div>

            </div>
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-check text-primary m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div
            className="d-flex align-items-center bg-light mb-4"
            style={{ padding: 30 }}
          >
            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
    {/* Featured End */}
    {/* Categories Start */}
    
    {/* Products End */}
    {/* Vendor Start */}
    {/* Vendor End */}
    {/* Footer Start */}
    {/* <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
          <p className="mb-4">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
            dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3" />
            info@example.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3" />
            +012 345 67890
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Shop
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Shop Detail
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Shopping Cart
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Checkout
                </a>
                <a className="text-secondary" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Shop
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Shop Detail
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Shopping Cart
                </a>
                <a className="text-secondary mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Checkout
                </a>
                <a className="text-secondary" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
              <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
              </form>
              <h6 className="text-secondary text-uppercase mt-4 mb-3">
                Follow Us
              </h6>
              <div className="d-flex">
                <a className="btn btn-primary btn-square mr-2" href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-primary btn-square mr-2" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-primary btn-square mr-2" href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="btn btn-primary btn-square" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row border-top mx-xl-5 py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-secondary">
            ©{" "}
            <a className="text-primary" href="#">
              Domain
            </a>
            . All Rights Reserved. Designed by
            <a className="text-primary" href="https://htmlcodex.com">
              HTML Codex
            </a>
            <br />
            Distributed By:{" "}
            <a href="https://themewagon.com" target="_blank">
              ThemeWagon
            </a>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt="" />
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    {/* <a href="#" className="btn btn-primary back-to-top">
      <i className="fa fa-angle-double-up" />
    </a> */} 
    {/* JavaScript Libraries */}
    {/* Contact Javascript File */}
    {/* Template Javascript */}
  </>
  
  );
}
