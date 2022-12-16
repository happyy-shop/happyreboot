import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useRouter } from "next/router";

export default function Slider() {
  const router = useRouter();
  return (
    <main>
      {/*? slider Area Start */}

      <div className="slider-area ">
        <div className="slider-active">
          {/* Single Slider */}
          <div className="single-slider slider-height d-flex align-items-center slide-bg">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <img
                    className=" slide_image"
                    src="https://o.remove.bg/downloads/b74a7c52-6669-435d-a075-41f31e3142b4/176124-5767917-removebg-preview.png"
                  ></img>
                  <div className="hero__caption">
                    <h1
                      data-animation="fadeInLeft"
                      data-delay=".4s"
                      data-duration="2000ms"
                    >
                      Select Your New Perfect Style
                    </h1>

                    <p
                      data-animation="fadeInLeft"
                      data-delay=".7s"
                      data-duration="2000ms"
                    >
                      you will find everything you need
                    </p>
                    {/* Hero-btn */}

                    {/* Hero-btn */}
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                      data-duration="2000ms"
                    >
                      <a
                        onClick={() => {
                          router.push("/AllProducts");
                        }}
                        className="btn hero-btn"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <div
                    className="hero__img"
                    data-animation="bounceIn"
                    data-delay=".4s"
                  >
                    <img
                      src="assets/img/hero/watch.png"
                      alt=""
                      className=" heartbeat"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
