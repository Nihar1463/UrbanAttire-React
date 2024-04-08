import "./cont5.css"
import C5itm1 from "../image/cont5_item1.webp"
import C5itm2 from "../image/cont5_item2.webp"
import C5itm3 from "../image/cont5_item3.webp"
import C5itm4 from "../image/cont5_item4.webp"
import C5itm5 from "../image/cont5_item5.webp"
import C5itm6 from "../image/cont5_item6.webp"

function Cont5(){
return(
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
          <button id="cont5_btn">Shop All Denim</button>
          <div id="cont5_lower">
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm1} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Denim Wallet</h3>
                <p>₹399.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm2} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Deni Bucket Hat</h3>
                <p>₹459.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm3} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Deni Cross Bag</h3>
                <p>₹499.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm4} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Denim Wallet</h3>
                <p>₹359.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm5} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Denim Cap</h3>
                <p>₹299.00</p>
              </div>
            </div>
            <div class="cont5_item">
              <div class="cont5_img">
                <img src={C5itm6} alt="" class="cont5_itm" />
              </div>
              <div class="price">
                <h3>Glasses Patch</h3>
                <p>₹249.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
)
}
export default Cont5;