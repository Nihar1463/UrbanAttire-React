import React from "react";
import "../Mens_Arrival/New_arrival.css";
import Shirt from "../image/Men_arrival/shirt/SHIRTT.png";
import Shirt1 from "../image/Men_arrival/shirt/srtt1.webp";
import Shirt11 from "../image/Men_arrival/shirt/srtt11.jpg";
import Shirt2 from "../image/Men_arrival/shirt/srtt2.webp";
import Shirt22 from "../image/Men_arrival/shirt/srtt22.webp";
import Shirt3 from "../image/Men_arrival/shirt/srtt3.webp";
import Shirt33 from "../image/Men_arrival/shirt/srtt33.webp";
import Shirt4 from "../image/Men_arrival/shirt/srtt4.webp";
import Shirt44 from "../image/Men_arrival/shirt/srtt44.webp";
import Shirt5 from "../image/Men_arrival/shirt/srtt5.webp";
import Shirt55 from "../image/Men_arrival/shirt/srtt55.webp";
import Shirt6 from "../image/Men_arrival/shirt/srtt6.webp";
import Shirt66 from "../image/Men_arrival/shirt/srtt66.webp";
import Shirt7 from "../image/Men_arrival/shirt/srtt7.webp";
import Shirt77 from "../image/Men_arrival/shirt/srtt77.webp";
import Shirt8 from "../image/Men_arrival/shirt/srtt8.webp";
import Shirt88 from "../image/Men_arrival/shirt/srtt88.webp";
import Shirt9 from "../image/Men_arrival/shirt/srtt9.webp";
import Shirt99 from "../image/Men_arrival/shirt/srtt99.webp";
import Shirt10 from "../image/Men_arrival/shirt/srtt10.webp";
import Shirt1010 from "../image/Men_arrival/shirt/srtt1010.webp";
import Shirt111 from "../image/Men_arrival/shirt/srtt11.webp";
import Shirt1111 from "../image/Men_arrival/shirt/srtt11111.webp";
import Shirt12 from "../image/Men_arrival/shirt/srtt12.webp";
import Shirt1212 from "../image/Men_arrival/shirt/srtt1212.jpg";
import Shirt13 from "../image/Men_arrival/shirt/srtt13.webp";
import Shirt1313 from "../image/Men_arrival/shirt/srtt1313.webp";
import Shirt14 from "../image/Men_arrival/shirt/srtt14.webp";
import Shirt1414 from "../image/Men_arrival/shirt/srtt1414.webp";
import Shirt15 from "../image/Men_arrival/shirt/srtt15.webp";
import Shirt1515 from "../image/Men_arrival/shirt/srtt1515.webp";
import Shirt16 from "../image/Men_arrival/shirt/srtt16.webp";
import Shirt1616 from "../image/Men_arrival/shirt/srtt1616.webp";
import Shirt17 from "../image/Men_arrival/shirt/srtt17.webp";
import Shirt1717 from "../image/Men_arrival/shirt/srtt1717.webp";
import Shirt18 from "../image/Men_arrival/shirt/srtt18.webp";
import Shirt1818 from "../image/Men_arrival/shirt/srtt1818.webp";
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

import { useCart } from "../Context/CartContext";


function All_Shirt() {
  const { addToCart } = useCart();
  const Al_Shirt = [
    {
      id: 41,
      img: Shirt6,
      img2: Shirt66,
      name: "The Jack Twist",
      price: "₹1399.00",
    },
    {
      id: 39,
      img: Shirt4,
      img2: Shirt44,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 37,
      img: Shirt2,
      img2: Shirt22,
      name: "The Point Rain Drop Shirt",
      price: "₹1499.00",
      p:"New Arrival",
    },
    {
      id: 38,
      img: Shirt3,
      img2: Shirt33,
      name: "The Camo Point  Shirt",
      price: "₹1099.00",
    },
    {
      id: 40,
      img: Shirt5,
      img2: Shirt55,
      name: "The Jack in Ash Twist",
      price: "₹1149.00",
      p: "New Arrival",
    },
    {
      id: 36,
      img: Shirt1,
      img2: Shirt11,
      name: "The Point Blue Shirt",
    price: "₹1799.00",
    },
    
   
  
   
  ];
  return (
    <>
      <Head />
      <div id="mn1">
        <div id="ct1">
          <img src={Shirt} alt="" id="ct1_img" />
          <p> Full Sleeve Shirts</p>
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
            <div class="content_arrrival ">
              {Al_Shirt.map((product) => (
                <div class="items_Sw1" key={product.id}>
                  <div class="itmImg_Sw1">
                    <div id="ppp">
                      {/* <p>{product.p}</p> */}
                      <p>{product.p}</p>
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
    </>
  );
}

export default All_Shirt;
