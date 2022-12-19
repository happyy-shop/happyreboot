import React, { useState } from "react";

type T = { setData: any };

const Sidebar = ({ setData }: T) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const FilterHandler = () => {
    setData((prev: any) =>
      prev.filter((item: any) => item.price > priceFrom || item.price < priceTo)
    );
  };

  return (
    <header className="header" role="banner">
      <h1 className="logo">
        <a href="#">
          MULTI <span>SHOP</span>
        </a>
      </h1>
      <div className="nav-wrap">
        <nav className="main-nav" role="navigation">
          <ul className="unstyled list-hover-slide">
            <li>
              <a href="/AllProducts">AllProducts</a>
            </li>
            <li>
              <a href="/jeans">Jeans</a>
            </li>
            <li>
              <a href="/shoes">Shoes</a>
            </li>
            <li>
              <a href="/T-SHIRT">T-shirt</a>
            </li>
          </ul>
          <center>
            {" "}
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="From"
                id="From"
                required
                onChange={(e) => setPriceFrom(e.target.value)}
              />
              <label className="form__label">From</label>
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="To"
                id="To"
                required
                onChange={(e) => setPriceTo(e.target.value)}
              />
              <label className="form__label">To</label>
            </div>
            <button className="button-32" role="button" onClick={FilterHandler}>
              Filter
            </button>
          </center>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
