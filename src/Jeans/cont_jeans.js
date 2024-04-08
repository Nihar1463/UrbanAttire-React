import "./cont_jeans.css";
import I1 from "../Components/image/Jeans/D1.png";
import I11 from "../Components/image/Jeans/D11.png";
import I2 from "../Components/image/Jeans/D2.png";
import I22 from "../Components/image/Jeans/D22.png";
import I3 from "../Components/image/Jeans/D5.png";
import I33 from "../Components/image/Jeans/D55.png";
import I4 from "../Components/image/Jeans/D3.png";
import I44 from "../Components/image/Jeans/D33 (2).png";
import I5 from "../Components/image/Jeans/D2.png";
import I55 from "../Components/image/Jeans/D22.png";
import I6 from "../Components/image/Jeans/D4.png";
import I66 from "../Components/image/Jeans/D44.png";
function Jeans_conts() {
  return (
    <>
      <div id="container1">
        <div id="title">
          <p>
            Men's
            <br />
            New <span>jeans</span>
            <br />
            Collection
          </p>
        </div>
      </div>
      <div class="main1">
        <div class="items">
          <div class="itmImg">
            <img src={I1} alt="" class="imgg" />
            <img src={I11} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>

            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I2} alt="" class="imgg" />
            <img src={I22} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I3} alt="" class="imgg" />
            <img src={I33} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I4} alt="" class="imgg" />
            <img src={I44} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I5} alt="" class="imgg" />
            <img src={I55} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="main2">
        <div class="items">
          <div class="itmImg">
            <img src={I3} alt="" class="imgg" />
            <img src={I33} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>

            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I4} alt="" class="imgg" />
            <img src={I44} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I1} alt="" class="imgg" />
            <img src={I11} alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
        <div class="items">
          <div class="itmImg">
            <img src={I2} alt="" class="imgg" />
            <img src={I22}alt="" class="imgg2" />
          </div>
          <div class="itm_name">
            <h3>Straight Leg Jean</h3>
            <p>₹799.00</p>
            <button class="cartbtn">Add To Cart</button>
          </div>
        </div>
      </div>
      <div id="abc">
        <h1>Formal Pants</h1>
      </div>
    </>
  );
}
export default Jeans_conts;
