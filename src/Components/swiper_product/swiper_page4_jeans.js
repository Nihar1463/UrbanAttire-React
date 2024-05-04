import "./swiper_page4_jeans.css";
import { ScrollRestoration } from "react-router-dom";
import Imgg from "../image/swiper_img/sw4.webp";
import Imgg1 from "../image/swiper_img/sw4444.jpg";
import Imgg11 from "../image/swiper_img/sw4_p11.jpg";
import Imgg2 from "../image/swiper_img/sw4_p2.jpg";
import Imgg22 from "../image/swiper_img/sw4_p22.jpg";
import Imgg3 from "../image/swiper_img/sw4_p3.jpg";
import Imgg33 from "../image/swiper_img/sw4_p33.jpg";
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
import Imgg10 from "../image/swiper_img/sw4_lower.webp";
import Footer from "../Footer/footer";

import SRT13 from "../image/Men_arrival/shirt/jj13.webp";
import SRT14 from "../image/Men_arrival/shirt/jj14.jpg";
import SRT15 from "../image/Men_arrival/shirt/jj15.webp";
import SRT16 from "../image/Men_arrival/shirt/jj16H.webp";
import SRT17 from "../image/Men_arrival/shirt/jj17V.webp";

import Imgg2T from "../image/Men_arrival/T-shirt/t2.webp";
import Imgg22T from "../image/Men_arrival/T-shirt/t22.webp";
import Je13 from "../image/Men_arrival/Jeans/j13.webp";
import Je14 from "../image/Men_arrival/Jeans/j14.webp";
import Je15 from "../image/Men_arrival/Jeans/j15.webp";
import Je16H from "../image/Men_arrival/Jeans/j16H.webp";
import Je17V from "../image/Men_arrival/Jeans/j17V.webp";
import Imgg2S from "../image/Men_arrival/short/short2.webp";
import Imgg22S from "../image/Men_arrival/short/short22.webp";
import RT2 from "../image/Men_arrival/T-shirt/t1.webp";
import RT2H from "../image/Men_arrival/T-shirt/t11.webp";

import ImgSS43 from "../image/Men_arrival/short/shrt223.webp";
import ImgSS44 from "../image/Men_arrival/short/shrt224.webp";
import ImgSS45 from "../image/Men_arrival/short/shrt2225.jpg";
import ImgSS46H from "../image/Men_arrival/short/shrt226H.webp";
import ImgSS47V from "../image/Men_arrival/short/shrt227V.webp";

import Imgg4S from "../image/Men_arrival/short/short4.webp";
import Imgg44S from "../image/Men_arrival/short/short44.webp";
import Je1 from "../image/Men_arrival/Jeans/j1.webp";
import ST13 from "../image/Men_arrival/short/srt13.jpg";
import ST14 from "../image/Men_arrival/short/srt14.webp";
import ST15 from "../image/Men_arrival/short/srt15.jpg";
import ST16 from "../image/Men_arrival/short/str16H.webp";
import ST17 from "../image/Men_arrival/short/srt17V.webp";
import Je11 from "../image/Men_arrival/Jeans/j2.webp";

import Imgg3S from "../image/Men_arrival/short/short3.jpg";
import Imgg33S from "../image/Men_arrival/short/short33.jpg";

import { useCart} from "../Context/CartContext";


import Head from "../Header/header";
import { Link } from "react-router-dom";
function Swip_p4() {
  const { addToCart } = useCart();
  const data = [
    {
      id: 13,
      // img: Imgg9,
      // img2: Imgg99,
      img: Imgg9,
      img2: Imgg99,
      img3: SRT13,
      img4: SRT14,
      img5: SRT15,
      img6: SRT16,
      img7: SRT17,

      color: "Aged Penny Chipped Canvas",
      name: "The Fremont Jacket",
      price: "₹2499.00",
    },
    {
      id: 11,
      // img: Je1,
      // img2: Je11,
      img3: Je13,
      img4: Je14,
      img5: Je15,
      img6: Je16H,
      img7: Je17V,
      r1: Imgg2T,
      r1H: Imgg22T,
      r2: Imgg6,
      r2H: Imgg66,
      r3: RT2,
      r3H: RT2H,
      r4: Imgg2S,
      r4H: Imgg22S,
      color: "Aged Penny Chipped Canvas",
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
      img: Imgg8,
      img2: Imgg88,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 7,
      img: Imgg2S,
      img2: Imgg22S,
      img3: ImgSS43,
      img4: ImgSS44,
      img5: ImgSS45,
      img6: ImgSS46H,
      img7: ImgSS47V,
      url1: "/product/12",
      url2: "/product/49",
      url3: "/product/36",
      url4: "/product/2",
      // r1: Short1,
      // r1H: Short11,
      // r2: Shirt10,
      // r2H: Shirt1010,
      // r3: Shirt1,
      // r3H: Shirt11,
      // r4: Imgg2,
      // r4H: Imgg22,
      color: " Canteen Hemp",
      name: "The Après Short Hemp",
      price: "₹999.00",
    },
    {
      id: 15,
      img: Imgg4S,
      img2: Imgg44S,
      img3: ST13,
      img4: ST14,
      img5: ST15,
      img6: ST16,
      img7: ST17,
      r1: Je1,
      r1H: Je11,
      r2: Imgg9,
      r2H: Imgg99,
      r3: RT2,
      r3H: RT2H,
      r4: Imgg2T,
      r4H: Imgg22T,
      color: "Organic Dark Blue Foundation Twill",
      name: "The Après Twill Short",
      price: "₹1199.00",
      url1: "/product/3",
      url2: "/product/13",
      url3: "/product/14",
      url4: "/product/9",
    },
    {
      id: 6,
      img: Imgg5,
      img2: Imgg55,
      name: "The Chipped Canvas",
      price: "₹1499.00",
    },
    {
      id: 12,
      img: Imgg3S,
      img2: Imgg33S,
      color: "Black Coffee Stripe",
      name: "The Après Stripe Short ",
      price: "₹1099.00",
    },
    {
      id: 10,
      img: Imgg7,
      img2: Imgg77,
      name: "The Workhorse Vest",
      price: "₹1599.00",
    },
    {
      id: 5,
      img: Imgg4,
      img2: Imgg44,
      name: "The Camp Short",
      price: "₹1099.00",
    },
    {
      id: 8,
      img: Imgg6,
      img2: Imgg66,
      name: "The Workhorse Utility Jacket",
      price: "₹2099.00",
    },
  ];
  return (
    <>
      <Head />

      <div id="Swip_p1">
        <div id="C1_Sw1">
          <div id="c1_tx1_Sw1">
            <p>Chipped Canvas Workwear</p>
          </div>
          <img src={Imgg} alt="" id="Sw_img1_Sw1" />
        </div>
        <div class="product_C2_Sw1">
          <div class="content_Sw11">
            {data.map((product) => (
              <div class="items_Sw11" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div class="itmImg_Sw11">
                    <img src={product.img} alt="" class="imgg_Sw11" />
                    <img src={product.img2} alt="" class="imgg2_Sw11" />
                  </div>
                </Link>
                <div class="itm_name_Sw1">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button class="cartbtn_Sw1" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="C3_Sw1">
          <img src={Imgg10} alt="" class="c3-img_Sw1" />
          {/* <div id="c3_lower_Sw1">
            <div id="c3_lowerL_Sw1">
              <img src={Imgg5} alt="" class="c3-img_Sw1" />
            </div>
            <div id="c3_lowerR_Sw1">
              <div id="c3_Ltext_Sw1">
                <p>THE DISPATCH</p>
                <h2>Indigo Alchemy</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  repellat voluptas itaque fugit! Nobis necessitatibus molestiae
                  ratione eligendi modi accusantium asperiores animi corrupti,
                  numquam tempore?
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div id="C4">
          <img src={Imgg6} alt="" class="c3-img_Sw1" />
        </div> */}
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Swip_p4;
