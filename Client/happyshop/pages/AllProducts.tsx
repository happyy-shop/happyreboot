//@ts-nocheck

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import Link from "next/link";
import axios from "axios";
import Sidebar from "./sidebar";
import Search from "./Search";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  return {
    props: {
      dataApi: data,
    },
  };
};

export default function AllProducts({ dataApi }) {
  const router = useRouter();
  const [data, setData] = useState(dataApi);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  console.log(cartProducts);

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
      <Search/>
      <div className="grid-container">
      <Sidebar setData={setData} />{" "}
        {data?.map((element: any) => {
          return (
            <div className="row" key={element.id}>
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <a className="image">
                      <img className="pic-1" src={element.imageUrl} />
                    </a>
                    <ul className="product-links"></ul>
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
                        router.push("/Card");
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
      {/* <Footer /> */}
    </div>
  );
}
