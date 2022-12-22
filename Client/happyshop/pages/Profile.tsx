//
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import type { AppProps } from "next/app";
import jwt from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile({ Component, pageProps, ...appProps }: AppProps) {
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  console.log(user);
  

  // console.log(user._id);
  useEffect(() => {  
    const token = localStorage.getItem("token");
    console.log(token,"token");
    if (token) {
      const user = jwt(token);
      
      if (!user) {
        localStorage.removeItem("token");
      } else {
        axios.get(`http://localhost:4000/users/get/${user.email}`).then((res) => {
          setUser(res.data);
        });
      }
    }
  }, []);

  var update = () => {
    // console.log("the id is " + id);
    
    axios
      .put(`http://localhost:4000/users/${user._id}`, {
        image,
        username,
        age,
        email,
        phone,
      })
      .then((res) => {
        console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };
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
                        src={user.image}
                        alt="..."
                        style={{ height: "50%", width: "50%" }}
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-primary me-2 font-weight-600">
                            Name:
                          </span>{" "}
                          {user.username}
                          <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Update Name"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-primary me-2 font-weight-600">
                            Age:
                          </span>{" "}
                          {user.age}
                          <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Update Age"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-primary me-2 font-weight-600">
                            E-mail:
                          </span>{" "}
                          {user.email}
                          <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Update Email"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-primary me-2 font-weight-600">
                            Phone Number:
                          </span>{" "}
                          {user.Phone}
                          <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Update Phone Number"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-primary me-2 font-weight-600">
                            Image:
                          </span>{" "}
                          <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Update Image"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          />
                        </li>
                        <li>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => update(user.id)}
                          >
                            Update
                          </button>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
