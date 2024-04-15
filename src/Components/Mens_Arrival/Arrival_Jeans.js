import React from "react";
import "./New_arrival.css";
import Im1 from "../image/Men_arrival/new_arivalc1.webp";
import JEN1 from "../image/Men_arrival/Jeans/jen1.webp";
import JEN11 from "../image/Men_arrival/Jeans/jen11.webp";
import JEN2 from "../image/Men_arrival/Jeans/jen2.webp";
import JEN22 from "../image/Men_arrival/Jeans/jen22.webp";
import JEN3 from "../image/Men_arrival/Jeans/jen3.webp";
import JEN33 from "../image/Men_arrival/Jeans/jen33.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Jeans_arrival() {
  const New_Arrival = [
    {
      img: JEN1,
      img2: JEN11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: JEN2,
      img2: JEN22,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: JEN3,
      img2: JEN33,
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
              <Link to="/New_arrival_Shorts">
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
      <Footer/>
    </>
  );
}

export default Jeans_arrival;
