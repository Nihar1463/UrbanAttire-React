import "./cont1.css";
import Model6 from "../image/model6.jpg";
import Model3 from "../image/model3.jpg";
import Urban from "../image/URBAN.png";
import { Link } from "react-router-dom";

function Cont1() {
  return (
    <>
      <div id="cont1">
        <div id="cont1_left">
          <div id="coupon">
            <p>25% OFF MENS JEANS - USE CODE: URBAN25</p>
          </div>
          <img src={Model6} alt="" id="model1" />
        </div>
        <div id="cont1_right">
          {/* <input type="text" placeholder="Search..." class="search" />
          <button class="searchbtn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="wishlist">♥ Wishlist</button>
          <button class="cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </button> */}
          <div id="cont1_center">
            <img src={Urban} alt="" id="urban" />
            <h1>GOODBYE SWEATS, HELLO DENIM</h1>
            <h3>Better days are coming, take them on in style.</h3>
            <Link to="/New_Arrival">
              <button id="shop">Shop Now</button>
            </Link>
          </div>
          <img src={Model3} alt="" id="model1" />
        </div>
      </div>
    </>
  );
}
export default Cont1;
