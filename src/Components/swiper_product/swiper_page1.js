import "./swiper_page1.css";
import { ScrollRestoration } from "react-router-dom";
import Imgg from "../image/swiper_img/swip1.webp";
import Imgg1 from "../image/swiper_img/itm1.webp";
import Imgg11 from "../image/swiper_img/item11.webp";
import Imgg2 from "../image/swiper_img/item2.webp";
import Imgg22 from "../image/swiper_img/item22.webp";
import Imgg3 from "../image/swiper_img/item3.webp";
import Imgg33 from "../image/swiper_img/item33.webp";
import Imgg4 from "../image/swiper_img/c3_img1.webp";
import Imgg5 from "../image/swiper_img/c3_lowerL.webp";
import Imgg6 from "../image/swiper_img/C3_img2.webp";
import Footer from "../Footer/footer";
import Head from "../Header/header";
function Swip_p1() {
  return (
    <>
      <Head />

      <div id="Swip_p1">
        <div id="C1_Sw1">
          <div id="c1_tx1_Sw1">
            <p>TS X MINERAL WORKSHOP</p>
          </div>
          <img src={Imgg} alt="" id="Sw_img1_Sw1" />
        </div>
        <div class="product_C2_Sw1">
          <div class="content_Sw11">
            <div class="items_Sw11">
              <div class="itmImg_Sw11">
                <img src={Imgg1} alt="" class="imgg_Sw11" />
                <img src={Imgg11} alt="" class="imgg2_Sw11" />
              </div>
              <div class="itm_name_Sw1">
                <h3>The Short Sleeve Carter</h3>
                <p>₹1499.00</p>

                <button class="cartbtn_Sw1">Add To Cart</button>
              </div>
            </div>
            <div class="items_Sw11">
              <div class="itmImg_Sw11">
                <img src={Imgg2} alt="" class="imgg_Sw11" />
                <img src={Imgg22} alt="" class="imgg2_Sw11" />
              </div>
              <div class="itm_name_Sw1">
                <h3>The Short Sleeve California</h3>
                <p>₹1299.00</p>
                <button class="cartbtn_Sw1">Add To Cart</button>
              </div>
            </div>
            <div class="items_Sw11">
              <div class="itmImg_Sw11">
                <img src={Imgg3} alt="" class="imgg_Sw11" />
                <img src={Imgg33} alt="" class="imgg2_Sw11" />
              </div>
              <div class="itm_name_Sw1">
                <h3>The Short Sleeve Maxico</h3>
                <p>₹1299.00</p>
                <button class="cartbtn_Sw1">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div id="C3_Sw1">
          <img src={Imgg4} alt="" class="c3-img_Sw1" />
          <div id="c3_lower_Sw1">
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
          </div>
        </div>
        <div id="C4">
          <img src={Imgg6} alt="" class="c3-img_Sw1" />
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
export default Swip_p1;
