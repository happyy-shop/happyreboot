//@ts-nocheck
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GoX } from "react-icons/go";
import axios from "axios";
import { useRouter } from "next/router";

export default function Card() {
  const [favoriteData, setFavoriteData] = useState([]);
  const [amount, setAmount] = useState(1);
  console.log(favoriteData);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:4000/favorite/getall")
      .then((result) => setFavoriteData(result.data));
  }, []);

  //localhost:4000/favorite/delete

  let deleteAll = () => {
    axios.delete("http://localhost:4000/favorite/delete").then(() => {
      console.log("deleted");
    });
  };

  let deleteOne = (idproduct: any) => {
    axios
      .delete(`http://localhost:4000/favorite/delete/${idproduct}`)
      .then(() => {
        console.log("deleted");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <button
          className="btn hero-btn"
          onClick={() => {
            deleteAll();
            router.push("/AllProducts");
          }}
        >
          Clear All
        </button>

        <div className="prod-info">
          {favoriteData ? (
            <div>
              {favoriteData.map((element: any) => {
                return (
                  <>
                    <>
                      <div className="container py-3">
                        {/* Card Start */}
                        <div className="card">
                          <div className="row ">
                            <div className="col-md-7 px-3">
                              <div className="card-block px-6">
                                <h1 className="card-title">
                                  {element.productName}{" "}
                                </h1>
                                <div className="category">
                                  Category : <span> {element.category}</span>
                                </div>

                                <p className="card-text"></p>
                                <p className="card-text">
                                  {element.description}
                                </p>
                                <br />
                                <h2> Price:{element.price} dt</h2>

                                <h3>Quantity :</h3>
                                <div className="btn-group">
                                  <button
                                    className="btn"
                                    id="plusBtn"
                                    onClick={() =>
                                      setAmount((prev) => prev + 1)
                                    }
                                  >
                                    +
                                  </button>
                                  <span className="btn" id="amount">
                                    {amount}
                                  </span>
                                  <button
                                    className="btn"
                                    id="minusBtn"
                                    onClick={() => {
                                      amount > 1 &&
                                        setAmount((prev) => prev - 1);
                                    }}
                                  >
                                    -
                                  </button>
                                </div>
                                <h1>
                                  Total :
                                  <span>{element.price * amount} dt </span>
                                </h1>
                              </div>

                              <button className="button-buy"> Buy</button>

                              <div>
                                <a
                                  className="btn hero-btn "
                                  onClick={() => {
                                    deleteOne(element._id);
                                  }}
                                >
                                  Delete
                                </a>
                              </div>
                            </div>

                            {/* Carousel start */}
                            <div className="col-md-5">
                              <div
                                id="CarouselTest"
                                className="carousel slide"
                                data-ride="carousel"
                              >
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      className="d-block"
                                      id="img"
                                      src={element.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End of carousel */}
                          </div>
                        </div>

                        {/* End of card */}
                      </div>
                    </>
                  </>
                );
              })}
            </div>
          ) : (
            <div> No products</div>
          )}{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
}
