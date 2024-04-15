import "./swiper_page4_jeans.css";
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
import Head from "../Header/header";
import { Link } from "react-router-dom";
function Swip_p4() {
  const data = [
    {
      img: Imgg1,
      img2: Imgg11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg2,
      img2: Imgg22,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg3,
      img2: Imgg33,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg4,
      img2: Imgg44,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg5,
      img2: Imgg55,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg6,
      img2: Imgg66,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg7,
      img2: Imgg77,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg8,
      img2: Imgg88,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      img: Imgg9,
      img2: Imgg99,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
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
            {data.map((test, index) => (
              <div class="items_Sw11" key={index}>
                <Link to={test.url}>
                <div class="itmImg_Sw11">
                  <img src={test.img} alt="" class="imgg_Sw11" />
                  <img src={test.img2} alt="" class="imgg2_Sw11" />
                </div>
                </Link>
                <div class="itm_name_Sw1">
                  <h3>{test.name}</h3>
                  <p>{test.price}</p>
                  <button class="cartbtn_Sw1">Add To Cart</button>
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
    </>
  );
}
export default Swip_p4;
