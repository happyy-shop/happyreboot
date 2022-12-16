//@ts-nocheck
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Footer from "./Footer";
import NavbarAdmin from "./NavbarAdmin";
import Axios from "axios";
import Link from "next/link";
// import Aside from "./aside";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default function AllProducts({ data }) {
  const router = useRouter();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:4000/product")k
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
  var del = (id: string) => {
    Axios.delete(`http://localhost:4000/product/${id}`)
      .then((res) => {
        console.log("deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);

  return (
    <div>
      <NavbarAdmin />
      <Link href="AddProduct">
        <button className="button_add">Add Product </button>
      </Link>

      <div className="grid-container">
        {data.map((element: any) => {
          return (
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <a className="image">
                      <img className="pic-1" src={element.imageUrl} />
                    </a>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <a
                          data-tip="delete"
                          onClick={() => {
                            del(element["_id"]);
                          }}
                        >
                          🗑️
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" data-tip="Compare">
                          <i className="fa fa-random" />
                        </a>
                      </li> */}
                      <Link href={"/edit/id"} as={`edit/${element._id}`}>
                        <li>
                          <a href="#" data-tip="edit">
                            <i className="fa fa-search" />
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <>{element.productName}</>
                    </h3>
                    <div className="price">{element.price} DT</div>
                    <a className="add-to-cart">add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
