//@ts-nocheck
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import Navbar from "./Navbar";
import axios from "axios";
import Link from "next/link";
import ProductDetails from "./[id]";
import NavbarAdmin from "./NavbarAdmin";
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

export default function AllProducts({ data  }) {
  const router = useRouter();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); 
  const filter = data.filter((e)=> e.category === "T-SHIRT") 


  let AddToCart = (
    iduser: any,
    id_product: any,
    product_name: any,
    product_description: any,
    category: any,
    price: any,
    image: any
  ) => {
    axios
      .post(`http://localhost:4000/favorite/${iduser}`, {
        productId: id_product,
        productName: product_name,
        description: product_description,
        category: category,
        price: price,
        imageUrl: image,
      })
      .then(() => {
        console.log("added to card");
        window.location.reload(false); 
      });
  };

  const [id, setId] = useState("");
  useEffect(() => {
    let GetId = localStorage.getItem("USER_ID");
    setId(GetId);
  }, []);

  console.log("testtt", id);

  return (
    <div>
      <NavbarAdmin />
      {/* <Aside /> */}
      <div className="grid-container">
        {filter.map((element: any) => {
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
                        <Link href={`${element._id}`}>
                          <span data-tip="Show details">
                            <i className="fa fa-search" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
             
                    <h3 className="title">
                      <Link href={`${element._id}`}>{element.productName}</Link>
                    </h3>
                    <div className="price">{element.price} DT</div>
                    <a
                      onClick={() => {
                        AddToCart(
                          id,
                          element._id,
                          element.productName,
                          element.description,
                          element.category,
                          element.price,
                          element.imageUrl
                        );
                        // router.push("/Card");
                      }}
                      className="add-to-cart"
                    >
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
