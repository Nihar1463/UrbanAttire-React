import React from "react";
import "./New_arrival.css";
import Im1 from "../image/Men_arrival/new_arivalc1.webp";

import Short1 from "../image/Men_arrival/short/short3.jpg";
import Short11 from "../image/Men_arrival/short/short33.jpg";
import Short2 from "../image/Men_arrival/short/short4.webp";
import Short22 from "../image/Men_arrival/short/short44.webp";
import Short3 from "../image/Men_arrival/short/short5.webp";
import Short33 from "../image/Men_arrival/short/short55.webp";
import Short4 from "../image/Men_arrival/short/short6.webp";
import Sh111 from "../image/Men_arrival/short/s1.webp";
import Sh112 from "../image/Men_arrival/short/s12.webp";

import Short44 from "../image/Men_arrival/short/short66.webp";
import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Shorts_arrival() {
  const Short = [
    {
      id: 32,
      img: Short1,
      img2: Short11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 33,
      img: Short2,
      img2: Short22,
      name: "The Après Twill Short",
    price: "₹1199.00",
    },
    {
      id: 34,
      img: Short3,
      img2: Short33,
      name: "The Après White Short",
      price: "₹1349.00",
    },
    {
      id: 35,
      img: Sh111,
      img2: Sh112,
      name: "The Après Twill Short",
      price: "₹1199.00",
    },
  ];
  return (
    <>
      <Head />
      <div id="mn1">
        <div id="ct1">
          <img src={Im1} alt="" id="ct1_img" />
          <p>New Arrival</p>
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
              <Link to="/New_Arrival">
                <h4>NEW ARRIVAL</h4>
              </Link>

              <Link to="/New_arrival_shirt">
                <p>SHIRTS</p>
              </Link>
              <Link to="/New_arrival_Tshirt">
                <p>T-SHIRTS</p>
              </Link>
              <Link to="/New_arrival_Jeans">
                <p>JEANS</p>
              </Link>
              <Link>
                <p>SHORTS</p>
              </Link>
            </div>
          </div>
          <div class="product_C2_arrrival ">
            <div class="content_arrrival ">
              {Short.map((product) => (
                <div class="items_Sw1" key={product.id}>
                  <div class="itmImg_Sw1">
                    <div id="ppp">
                      <p>New Arrival</p>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.img} alt="" class="imgg_Sw1" />
                      <img src={product.img2} alt="" class="imgg2_Sw1" />
                    </Link>
                  </div>
                  <div class="itm_name_Sw1">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>

                    <button class="cartbtn_Sw1">Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shorts_arrival;
