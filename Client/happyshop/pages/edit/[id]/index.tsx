import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "../../NavbarAdmin";
import Footer from "../../Footer";

const Test = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [productName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  console.log(data);
  //   console.log(id);
  useEffect(() => {
    if (router.isReady) {
      // Code using query)

      console.log(router.query.id);
      axios
        .get(`http://localhost:4000/product/${router.query.id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [router.isReady]);
  const up = () => {
    axios
      .put(`http://localhost:4000/product/${router.query.id}`, {
        productName,
        description,
        category,
        price,
        imageUrl,
        color,
      })
      .then((res) => {
        console.log(res);
        router.push("/AllProductAdmin");
      });
  };

  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>

      <center>
        <div className="form">
          <div className="title">Welcome Admin</div>
          <div className="subtitle">Update Product</div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">
              {" "}
              name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              description
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              imageUrl
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              category
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              color
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              price
            </label>
          </div>

          <button className="submit" onClick={() => up()}>
            submit
          </button>
        </div>
      </center>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Test;
