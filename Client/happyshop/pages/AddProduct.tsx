//@ts-nocheck
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";

export default function AddProduct() {
  const router = useRouter();

  const [productName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const add = () => {
    axios
      .post("http://localhost:4000/product", {
        productName,
        description,
        category,
        price,
        imageUrl,
        color,
      })
      .then((res) => {
        console.log("posted");
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
          <div className="subtitle">Add a New Product</div>
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

          <button className="submit" onClick={() => add()}>
            submit
          </button>
        </div>
      </center>
      <div>
        <Footer />
      </div>
    </div>
  );
}
