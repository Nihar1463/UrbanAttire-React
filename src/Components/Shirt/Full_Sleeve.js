import React from "react";
import "../Mens_Arrival/New_arrival.css";
import Shirt from "../image/Men_arrival/shirt/full_sleeve.webp";
import SFS1 from "../image/Men_arrival/shirt/SFS1.webp";
import SFS11 from "../image/Men_arrival/shirt/SFS11.webp";
import SFS2 from "../image/Men_arrival/shirt/SFS2.webp";
import SFS22 from "../image/Men_arrival/shirt/SFS22.webp";
import SFS3 from "../image/Men_arrival/shirt/SFS3.webp";
import SFS33 from "../image/Men_arrival/shirt/SFS33.webp";
import SFS4 from "../image/Men_arrival/shirt/SFS4.webp";
import SFS44 from "../image/Men_arrival/shirt/SFS44.webp";
import SFS5 from "../image/Men_arrival/shirt/SFS5.webp";
import SFS55 from "../image/Men_arrival/shirt/SFS55.webp";
import SFS6 from "../image/Men_arrival/shirt/SFS6.webp";
import SFS66 from "../image/Men_arrival/shirt/SFS66.webp";
import SFS7 from "../image/Men_arrival/shirt/SFS7.webp";
import SFS77 from "../image/Men_arrival/shirt/SFS77.webp";
import SFS8 from "../image/Men_arrival/shirt/SFS8.webp";
import SFS88 from "../image/Men_arrival/shirt/SFS88.webp";
import SFS9 from "../image/Men_arrival/shirt/SFS9.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Full_Sleeve_Shirt() {
  const New_Arrival = [
    {
      img: SFS1,
      img2: SFS11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS2,
      img2: SFS22,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS3,
      img2: SFS33,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS4,
      img2: SFS44,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS5,
      img2: SFS55,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS6,
      img2: SFS66,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS7,
      img2: SFS77,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS8,
      img2: SFS88,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: SFS9,
      img2: SFS9,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
  ];
  return (
    <>
      <Head />
      <div id="mn1">
        <div id="ct1">
          <img src={Shirt} alt="" id="ct1_img" />
          <p> Full Sleeve Shirt</p>
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
              <Link to="/All_Shirt">
                <h4>ALL SHIRTS</h4>
              </Link>

              <Link to="/long_sleeve_shirt">
                <p>lONG SLEEVE</p>
              </Link>
              <Link to="/Short_sleeve_shirt">
                <p>SHORT SLEEVE</p>
              </Link>
              <Link to="/Oxford_shirt">
                <p>OXFORDS</p>
              </Link>
            </div>
          </div>
          <div class="product_C2_arrrival ">
                {/* <h2 id="h22">Full Sleeve...</h2> */}
            <div class="content_arrrival ">
              {New_Arrival.map((test, index) => (
                <div class="items_Sw1" key={index}>
                  <div class="itmImg_Sw1">
                    {/* <div id="ppp">
                      <p>New Arrival</p>
                    </div> */}
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

export default Full_Sleeve_Shirt;
