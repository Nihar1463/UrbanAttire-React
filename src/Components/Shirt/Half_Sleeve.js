import React from "react";
import "../Mens_Arrival/New_arrival.css";
import Shirt from "../image/Men_arrival/shirt/half_sleeve.jpg";
import Srt1 from "../image/Men_arrival/shirt/Srt1.webp";
import Srt11 from "../image/Men_arrival/shirt/Srt11.webp";
import Srt2 from "../image/Men_arrival/shirt/srt2.webp";
import Srt22 from "../image/Men_arrival/shirt/srt22.webp";
import Srt3 from "../image/Men_arrival/shirt/srt3.webp";
import Srt33 from "../image/Men_arrival/shirt/srt33.webp";
import Srt4 from "../image/Men_arrival/shirt/srt4.webp";
import Srt44 from "../image/Men_arrival/shirt/srt44.webp";
import Srt5 from "../image/Men_arrival/shirt/srt5.webp";
import Srt55 from "../image/Men_arrival/shirt/srt55.webp";
import Srt6 from "../image/Men_arrival/shirt/srt6.webp";
import Srt66 from "../image/Men_arrival/shirt/srt66.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Half_Sleeve_Shirt() {
  const All_Shirtss = [
    {
      id: 17,
      img: Srt1,
      img2: Srt11,
      name: "Short Sleeve Hawthorne",
      price: "₹1199.00",
    },

    {
      id: 18,
      img: Srt3,
      img2: Srt33,
      name: "The Harwich Brick Shirt ",
      price: "₹1099.00",
    },
    {
      id: 19,
      img: Srt4,
      img2: Srt44,
      name: "The Harwich Brick Shirt ",
      price: "₹1099.00",
    },
    {
      id: 21,
      img: Srt5,
      img2: Srt55,
      name: "The Harwich Green Shirt",
      price: "₹1099.00",
    },
    {
      id: 22,
      img: Srt6,
      img2: Srt66,
      name: "Short Sleeve Floral",
      price: "₹1499.00",
    },
  ];
  return (
    <>
      <Head />
      <div id="mn1">
        <div id="ct1">
          <img src={Shirt} alt="" id="ct1_img" />
          <p> Half Sleeve Shirt</p>
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
              
            </div>
          </div>
          <div class="product_C2_arrrival ">
            {/* <h2 id="h22">Full Sleeve...</h2> */}
            <div class="content_arrrival ">
              {All_Shirtss.map((product) => (
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

export default Half_Sleeve_Shirt;
