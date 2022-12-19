import Link from "next/link";
import React from "react"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function HomeAdmin() {
  return (
    <div> 
      
     <button className="active8">
                <Link href='/AllProductAdmin' >WELCOME ADMIN</Link>
              </button>
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
    </div>
  );
}
