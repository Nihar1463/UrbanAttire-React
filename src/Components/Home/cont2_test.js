import "./cont2_test.css";
import Item1 from "../image/item1.webp";
import Item11 from "../image/item11.webp";
import Item2 from "../image/item2.webp";
import Item22 from "../image/item22.webp";
import Item3 from "../image/item3.webp";
import Item33 from "../image/item33.webp";
import Item4 from "../image/item4.webp";
import Item5 from "../image/item5.webp";
import Item6 from "../image/item6.webp";
import Item66 from "../image/item66.webp";
function Cont2_test() {
  return (
    <>
      <div id="cont2">
        <p id="para">BEST SELLING DENIM</p>
        <div id="main_item">
          <div class="items">
            <img src={Item1} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>
            <img src={Item11} alt="" class="item_img11" />
            <div class="price">
              <h3>Straight Leg Jean</h3>
              <p>₹799.00</p>
            </div>
          </div>
          <div class="items">
            <img src={Item2} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>

            <img src={Item22} alt="" class="item_img11" />
            <div class="price">
              <h3>Oversized Jacket</h3>
              <p>₹999.00</p>
            </div>
          </div>
          <div class="items">
            <img src={Item3} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>

            <img src={Item33} alt="" class="item_img11" />
            <div class="price">
              <h3>Denim Fade Shorts</h3>
              <p>₹599.00</p>
            </div>
          </div>
          <div class="items">
            <img src={Item4} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>

            <img src={Item4} alt="" class="item_img11" />
            <div class="price">
              <h3>Skinny Jean</h3>
              <p>₹699.00</p>
            </div>
          </div>
          <div class="items">
            <img src={Item5} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>

            <img src={Item5} alt="" class="item_img11" />
            <div class="price">
              <h3>Balck Fade Jeans</h3>
              <p>₹799.00</p>
            </div>
          </div>
          <div class="items">
            <img src={Item6} alt="" class="item_img1" />
            <div id="seller">
              <p>Best Seller</p>
            </div>

            <img src={Item66} alt="" class="item_img11" />
            <div class="price">
              <h3>Denim jacket</h3>
              <p>₹999.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont2_test;
