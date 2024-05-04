import React from "react";
import "./New_arrival.css";
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

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "../Context/CartContext";


function TShirt_arrival() {
  const { addToCart } = useCart();
  const New_Arrival = [
    {
      id: 24,
      img: I1T,
      img2: I11T,
      name: "The Rugby Quarter Zip",
      price: "₹2049.00",
    },
    {
      id: 25,
      img: I2T,
      img2: I22T,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 26,
      img: I3T,
      img2: I33T,
      name: "The Organic Cotton Tee Gold ",
      price: "₹899.00",
    },
    {
      id: 27,
      img: I4T,
      img2: I44T,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 28,
      img: I5T,
      img2: I55T,
      name: "The Organic Cotton Henley",
      price: "₹899.00",
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
              {New_Arrival.map((product) => (
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

export default TShirt_arrival;
