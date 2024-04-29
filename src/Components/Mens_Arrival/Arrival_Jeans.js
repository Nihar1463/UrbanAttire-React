import React from "react";
import "./New_arrival.css";
import { ScrollRestoration } from "react-router-dom";

import Im1 from "../image/Men_arrival/new_arivalc1.webp";
import JEN1 from "../image/Men_arrival/Jeans/jen1.webp";
import JEN11 from "../image/Men_arrival/Jeans/jen11.webp";
import JEN2 from "../image/Men_arrival/Jeans/jen2.webp";
import JEN22 from "../image/Men_arrival/Jeans/jen22.webp";
import JEN3 from "../image/Men_arrival/Jeans/jen3.webp";
import JEN33 from "../image/Men_arrival/Jeans/jen33.webp";
import Ja1 from "../image/Men_arrival/Jeans/ja1.webp";
import Ja12 from "../image/Men_arrival/Jeans/ja12.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
function Jeans_arrival() {
  const Jeans = [
    {
      id: 29,
      img: Ja1,
      img2: Ja12,
      name: "The Democratic Jean",
      price: "₹2500.00",
    },
    {
      id: 30,
      img: JEN2,
      img2: JEN22,
      name: "The Morse Pant",
      price: "₹3499.00",
    },
    {
      id: 31,
      img: JEN3,
      img2: JEN33,
      name: "The Slim Selvage Jean ",
      price: "₹2999.00",
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
            {Jeans.map((product) => (
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
      <ScrollRestoration />

    </>
  );
}

export default Jeans_arrival;
