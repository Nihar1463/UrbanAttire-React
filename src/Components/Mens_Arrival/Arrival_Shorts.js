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
import Short44 from "../image/Men_arrival/short/short66.webp";
import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Shorts_arrival() {
  const New_Arrival = [
    {
      img: Short1,
      img2: Short11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Short2,
      img2: Short22,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Short3,
      img2: Short33,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Short4,
      img2: Short44,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
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
              {New_Arrival.map((test, index) => (
                <div class="items_Sw1" key={index}>
                  <div class="itmImg_Sw1">
                    <div id="ppp">
                      <p>New Arrival</p>
                    </div>
                    <img src={test.img} alt="" class="imgg_Sw1" />

                    <img src={test.img2} alt="" class="imgg2_Sw1" />
                  </div>
                  <div class="itm_name_Sw1">
                    <h3>{test.name}</h3>
                    <p>{test.price}</p>

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
