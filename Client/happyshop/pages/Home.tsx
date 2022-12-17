import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Home() {
  return (
    <>
    <div>
              <Carousel>
                  <div>
                      <img src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671285641/happyshop/carousel-1_mt7jow.jpg" alt="image1"/>
  
                  </div>
                  <div>
                      <img src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671285719/happyshop/carousel-3_po3lyg.jpg" alt="image2" />
  
                  </div>
                  <div>
                      <img src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1671286702/happyshop/carousel-2_qmoivl.jpg" alt="image3"/>
                  </div>

              </Carousel>
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
