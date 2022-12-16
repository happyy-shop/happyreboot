import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
// import { useNavigate } from "react-router-dom";
export default function Footer() {
  //   const navigate = useNavigate();
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Contact</h3>
                <ul>
                  <p>
                    Bloc B24, Elgazala Technopark, Raoued, Gouvernorat de
                    l'Ariana, 2088 Ariana – Tunisie. contact@RBK.tn
                  </p>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>PAGES</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-3 item">
                <h3>DEVELOPED WITH</h3>
                <ul>
                  <li>
                    <a href="#">React & Next js</a>
                  </li>

                  <li>
                    <a href="#">Bootstrap</a>
                  </li>
                  <li>
                    <a href="#">MongoDB</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text"></div>

              <h3>Happy Shop</h3>
              <p>
                Happy Shop includes everything you need to select your new
                perfect style
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
