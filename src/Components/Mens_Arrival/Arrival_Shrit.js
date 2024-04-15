import React from "react";
import "./New_arrival.css";
import Im1 from "../image/Men_arrival/new_arivalc1.webp";
import Imgg1 from "../image/swiper_img/itm1.webp";
import Imgg11 from "../image/swiper_img/item11.webp";

import Imgg1srt from "../image/Men_arrival/shirt/Srt1.webp";
import Imgg11srt from "../image/Men_arrival/shirt/Srt11.webp";
import Imgg3srt from "../image/Men_arrival/shirt/srt3.webp";
import Imgg33srt from "../image/Men_arrival/shirt/srt33.webp";
import Imgg4srt from "../image/Men_arrival/shirt/srt4.webp";
import Imgg44srt from "../image/Men_arrival/shirt/srt44.webp";
import Imgg5srt from "../image/Men_arrival/shirt/srt5.webp";
import Imgg55srt from "../image/Men_arrival/shirt/srt55.webp";
import Imgg6srt from "../image/Men_arrival/shirt/srt6.webp";
import Imgg66srt from "../image/Men_arrival/shirt/srt66.webp";
import Imgg7srt from "../image/Men_arrival/shirt/srt7.webp";
import Imgg77srt from "../image/Men_arrival/shirt/srt77.jpg";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Shirt_arrival() {
  const New_Arrival = [
    {
      img: Imgg1srt,
      img2: Imgg11srt,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg3srt,
      img2: Imgg33srt,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg4srt,
      img2: Imgg44srt,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg1,
      img2: Imgg11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    

    {
      img: Imgg5srt,
      img2: Imgg55srt,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    
    {
      img: Imgg6srt,
      img2: Imgg66srt,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg7srt,
      img2: Imgg77srt,
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

export default Shirt_arrival;
