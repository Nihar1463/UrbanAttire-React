import React from "react";
import "./New_arrival.css";
import { ScrollRestoration } from "react-router-dom";

import Im1 from "../image/Men_arrival/new_arivalc1.webp";
import Imgg1 from "../image/swiper_img/itm1.webp";
import Imgg11 from "../image/swiper_img/item11.webp";
import Imgg2 from "../image/swiper_img/item2.webp";
import Imgg22 from "../image/swiper_img/item22.webp";
import Imgg3 from "../image/swiper_img/item3.webp";
import Imgg33 from "../image/swiper_img/item33.webp";
import Imgg4 from "../image/swiper_img/sw4_p4.jpg";
import Imgg44 from "../image/swiper_img/sw4_p44.jpg";
import Imgg5 from "../image/swiper_img/sw4_p5.jpg";
import Imgg55 from "../image/swiper_img/sw4_p55.jpg";
import Imgg6 from "../image/swiper_img/sw4_p6.jpg";
import Imgg66 from "../image/swiper_img/sw4_p66.jpg";
import Imgg7 from "../image/swiper_img/sw4_p7.jpg";
import Imgg77 from "../image/swiper_img/sw4_p77.jpg";
import Imgg8 from "../image/swiper_img/sw4_p8.jpg";
import Imgg88 from "../image/swiper_img/sw4_p88.jpg";
import Imgg9 from "../image/swiper_img/sw4_p9.jpg";
import Imgg99 from "../image/swiper_img/sw4_p99.jpg";
import Imgg1S from "../image/Men_arrival/short/short1.webp";
import Imgg11S from "../image/Men_arrival/short/short11.webp";
import Imgg2S from "../image/Men_arrival/short/short2.webp";
import Imgg22S from "../image/Men_arrival/short/short22.webp";
import Imgg3S from "../image/Men_arrival/short/short3.jpg";
import Imgg33S from "../image/Men_arrival/short/short33.jpg";
import Imgg4S from "../image/Men_arrival/short/short4.webp";
import Imgg44S from "../image/Men_arrival/short/short44.webp";
import Imgg1T from "../image/Men_arrival/T-shirt/t1.webp";
import Imgg11T from "../image/Men_arrival/T-shirt/t11.webp";
import Imgg2T from "../image/Men_arrival/T-shirt/t2.webp";
import Imgg22T from "../image/Men_arrival/T-shirt/t22.webp";
import Imgg3T from "../image/Men_arrival/T-shirt/t3.webp";
import Imgg33T from "../image/Men_arrival/T-shirt/t33.webp";
import Imgg4T from "../image/Men_arrival/T-shirt/t4.webp";
import Imgg44T from "../image/Men_arrival/T-shirt/t44.webp";
import Imgg5T from "../image/Men_arrival/T-shirt/t5.webp";
import Imgg55T from "../image/Men_arrival/T-shirt/t55.webp";
import Img12 from "../image/swiper_img/itm13.webp";
import Img13 from "../image/swiper_img/itm14.webp";
import Img14 from "../image/swiper_img/itm15.webp";
import Img15H from "../image/swiper_img/itm16H.webp";
import Img17V from "../image/swiper_img/itm17V.webp";
import Img23 from "../image/swiper_img/itm23.webp";
import Img24 from "../image/swiper_img/itm24.webp";
import Img25 from "../image/swiper_img/itm25.webp";
import Img26H from "../image/swiper_img/itm26H.webp";
import Img27V from "../image/swiper_img/itm17V.webp";
import Img333 from "../image/swiper_img/itm333.webp";
import Img34 from "../image/swiper_img/itm34.webp";
import Img35 from "../image/swiper_img/itm35.jpg";
import Img36H from "../image/swiper_img/itm36H.webp";
import Img37V from "../image/swiper_img/itm37V.webp";

import { Link } from "react-router-dom";
import Head from "../Header/header";
import Footer from "../Footer/footer";
import { itemData } from "./Data";

function New_arrival() {
  const New_arrival = [
    {
      id: 1,
      img: Imgg1,
      img2: Imgg11,
      img3: Img12,
      img4: Img13,
      img5: Img14,
      img6: Img15H,
      img7: Img17V,
      color: "Dark Navy Abstract",
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 2,
      img: Imgg2,
      img2: Imgg22,
      img3: Img23,
      img4: Img24,
      img5: Img25,
      img6: Img26H,
      img7: Img27V,
      color: " Dark Navy Ginkgo",
      name: "The Short Sleeve California",
      price: "₹1099.00",
    },
    {
      id: 3,
      img: Imgg1S,
      img2: Imgg11S,
      img3: Img23,
      img4: Img24,
      img5: Img25,
      img6: Img26H,
      img7: Img27V,

      name: " The Après Short Brick Dobby",
      price: "₹999.00",
    },
    {
      id: 4,
      img: Imgg3,
      img2: Imgg33,
      img3: Img333,
      img4: Img34,
      img5: Img35,
      img6: Img36H,
      img7: Img37V,
      name: "The Short Sleeve Jack",
      price: "₹1149.00",
    },
    {
      id: 5,
      img: Imgg4,
      img2: Imgg44,
      name: "The Camp Short",
      price: "₹1099.00",
    },
    {
      id: 6,
      img: Imgg5,
      img2: Imgg55,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 7,
      img: Imgg2S,
      img2: Imgg22S,
      name: "The Après Short Hemp",
      price: "₹999.00",
    },
    {
      id: 8,
      img: Imgg6,
      img2: Imgg66,
      name: "The Workhorse Utility Jacket",
      price: "₹2099.00",
    },
    {
      id: 9,
      img: Imgg2T,
      img2: Imgg22T,
      name: "The Heavy Bag Tee",
      price: "₹499.00",
    },
    {
      id: 10,
      img: Imgg7,
      img2: Imgg77,
      name: "The Workhorse Vest",
      price: "₹1599.00",
    },
    {
      id: 11,
      img: Imgg8,
      img2: Imgg88,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 12,
      img: Imgg3S,
      img2: Imgg33S,
      name: "The Après Stripe Short ",
      price: "₹1099.00",
    },
    {
      id: 13,
      img: Imgg9,
      img2: Imgg99,
      name: "The Fremont Jacket",
      price: "₹2499.00",
    },
    {
      id: 14,
      img: Imgg1T,
      img2: Imgg11T,
      name: "The Heavy Bag Tee Cherry ",
      price: "₹999.00",
    },
    {
      id: 15,
      img: Imgg4S,
      img2: Imgg44S,
      name: "The Après Twill Short",
      price: "₹1199.00",
    },
    {
      id: 16,
      img: Imgg5T,
      img2: Imgg55T,
      name: "TThe Rugby T-Shirt ",
      price: "₹1749.00",
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
              {New_arrival.map((product) => (
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
              {/* <div class="items_Sw1">
                <div class="itmImg_Sw1">
                  <img src={Imgg1} alt="" class="imgg_Sw1" />
                  <img src={Imgg11} alt="" class="imgg2_Sw1" />
                </div>
                <div class="itm_name_Sw1">
                  <h3>The Short Sleeve Carter</h3>
                  <p>₹1499.00</p>

                  <button class="cartbtn_Sw1">Add To Cart</button>
                </div>
              </div>
              <div class="items_Sw1">
                <div class="itmImg_Sw1">
                  <img src={Imgg2} alt="" class="imgg_Sw1" />
                  <img src={Imgg22} alt="" class="imgg2_Sw1" />
                </div>
                <div class="itm_name_Sw1">
                  <h3>The Short Sleeve California</h3>
                  <p>₹1299.00</p>
                  <button class="cartbtn_Sw1">Add To Cart</button>
                </div>
              </div>
              <div class="items_Sw1">
                <div class="itmImg_Sw1">
                  <img src={Imgg3} alt="" class="imgg_Sw1" />
                  <img src={Imgg33} alt="" class="imgg2_Sw1" />
                </div>
                <div class="itm_name_Sw1">
                  <h3>The Short Sleeve Maxico</h3>
                  <p>₹1299.00</p>
                  <button class="cartbtn_Sw1">Add To Cart</button>
                </div>
              </div>
              <div class="items_Sw1">
                <div class="itmImg_Sw1">
                  <img src={Imgg3} alt="" class="imgg_Sw1" />
                  <img src={Imgg33} alt="" class="imgg2_Sw1" />
                </div>
                <div class="itm_name_Sw1">
                  <h3>The Short Sleeve Maxico</h3>
                  <p>₹1299.00</p>
                  <button class="cartbtn_Sw1">Add To Cart</button>
                </div>
              </div>
              <div class="items_Sw1">
                <div class="itmImg_Sw1">
                  <img src={Imgg3} alt="" class="imgg_Sw1" />
                  <img src={Imgg33} alt="" class="imgg2_Sw1" />
                </div>
                <div class="itm_name_Sw1">
                  <h3>The Short Sleeve Maxico</h3>
                  <p>₹1299.00</p>
                  <button class="cartbtn_Sw1">Add To Cart</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default New_arrival;
