import "./cont5.css";
import C5itm1 from "../image/cont5_item1.webp";
import C5itm2 from "../image/cont5_item2.webp";
import C5itm3 from "../image/cont5_item3.webp";
import C5itm4 from "../image/cont5_item4.webp";
import C5itm5 from "../image/cont5_item5.webp";
import C5itm6 from "../image/cont5_item6.webp";
import C5itm7 from "../image/Accessories/acce2.webp";
import C5itm8 from "../image/Accessories/acce3.webp";
import C5itm9 from "../image/Accessories/acce4.webp";
import C5itm10 from "../image/Accessories/acce5.webp";
import C5itm11 from "../image/Accessories/acce6.webp";
import Ac54 from "../image/Accessories/ac54.webp";

import { Link } from "react-router-dom";

function Cont5() {
  const Accessories = [
    {
      id: 70,
      img: C5itm7,
      name: "The Tooled Belt",
      price: "₹799.00",
    },
    {
      id: 71,
      img: C5itm8,
      name: "The Braided Belt",
      price: "₹999.00",
    },
    {
      id: 72,
      img: C5itm9,
      name: "The Legend Amber",
      price: "₹799.00",
    },
    {
      id: 73,
      img: C5itm10,
      name: "The Foundation Belt",
      price: "₹699.00",
    },
    {
      id: 74,
      img: Ac54,
      name: "The Weekender Duffle",
      price: "₹1199.00",
    },
  ];
  return (
    <>
      <div id="cont5">
        <div id="cont5_uper">
          <p id="P1_cont5_uper">We Love Denim</p>
          <p id="P2_cont5_uper">
            OUR FAVOURITE ACCESSORIES MADE FOR THE BEST COMFORT AND STYLE.
          </p>
          <p id="P3_cont5_uper">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <Link to="/product/72">
            <button id="cont5_btn">Shop All Accessories</button>
          </Link>
          <div id="cont5_lower">
            {Accessories.map((product) => (
              <div class="cont5_item">
                <div class="cont5_img">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt="" class="cont5_itm" />
                  </Link>
                </div>
                <div class="price">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
            {/* <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm8} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Deni Bucket Hat</h3>
                <p>₹459.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm9} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Deni Cross Bag</h3>
                <p>₹499.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm10} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Denim Wallet</h3>
                <p>₹359.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm11} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Denim Cap</h3>
                <p>₹299.00</p>
              </div>
            </div> */}
            {/* <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm6} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Glasses Patch</h3>
                <p>₹249.00</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont5;
