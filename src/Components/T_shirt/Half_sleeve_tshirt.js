import React from "react";
import "../Mens_Arrival/New_arrival.css";
import { ScrollRestoration } from "react-router-dom";

import Im1 from "../image/Men_arrival/new_arivalc1.webp";
import I1T from "../image/Men_arrival/T-shirt/t7.webp";
import I11T from "../image/Men_arrival/T-shirt/t77.webp";
import I2T from "../image/Men_arrival/T-shirt/t8.webp";
import I22T from "../image/Men_arrival/T-shirt/t88.webp";
import I3T from "../image/Men_arrival/T-shirt/t9.webp";
import I33T from "../image/Men_arrival/T-shirt/t99.webp";
import I4T from "../image/Men_arrival/T-shirt/t10.webp";
import I44T from "../image/Men_arrival/T-shirt/t1010.webp";
import I5T from "../image/Men_arrival/T-shirt/t111.webp";
import I55T from "../image/Men_arrival/T-shirt/t1111.webp";
import Imgg2T from "../image/Men_arrival/T-shirt/t2.webp";
import Imgg22T from "../image/Men_arrival/T-shirt/t22.webp";
import Imgg1T from "../image/Men_arrival/T-shirt/t1.webp";
import Imgg11T from "../image/Men_arrival/T-shirt/t11.webp";
import Imgg5T from "../image/Men_arrival/T-shirt/t5.webp";
import Imgg55T from "../image/Men_arrival/T-shirt/t55.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";

import { useCart } from "../Context/CartContext";


function Half_sleeve_Tshirt() {
  const { addToCart } = useCart();
  const New_Arrival = [
    {
      id: 9,
      img: Imgg2T,
      img2: Imgg22T,
      name: "The Heavy Bag Tee",
      price: "₹499.00",
    },

    {
      id: 25,
      img: I2T,
      img2: I22T,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
      P: "New Arrival",
    },
    {
      id: 26,
      img: I3T,
      img2: I33T,
      name: "The Organic Cotton Tee Gold ",
      price: "₹899.00",
    },
    {
      id: 14,
      img: Imgg1T,
      img2: Imgg11T,
      name: "The Heavy Bag Tee Cherry ",
      price: "₹999.00",
    },
  ];
  return (
    <>
      <Head />
      <div id="mn1">
        <div id="ct1">
          <img src={Im1} alt="" id="ct1_img" />
          <p>Half_sleeve_Tshirt</p>
        </div>
        <div id="ct2">
          <div id="verticle_div">
            <div id="fisrt_home">
              <Link to="/homepage">
                <p id="home">Home</p>
              </Link>

              {/* <p><i class="fa-solid fa-greater-than"></i> </p> */}
            </div>
            <div id="list_lower">
              <Link to="/All_Tshirt">
                <h4>ALL T-SHIRTS</h4>
              </Link>

              <Link to="/Half_S_T-shirt">
                <p>HALF-SLEEVE</p>
              </Link>
              <Link to="/Full_S_T-shirt">
                <p>FULL_SLEEVE</p>
              </Link>
            </div>
          </div>
          <div class="product_C2_arrrival ">
            <div class="content_arrrival ">
              {New_Arrival.map((product) => (
                <div class="items_Sw1" key={product.id}>
                  <div class="itmImg_Sw1">
                    <div id="ppp">
                      <p>{product.P}</p>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} alt="" class="imgg_Sw1" />
                      <img src={product.img2} alt="" class="imgg2_Sw1" />
                    </Link>
                  </div>
                  <div class="itm_name_Sw1">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>

                    <button class="cartbtn_Sw1" onClick={() => addToCart(product)}>Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Half_sleeve_Tshirt;
