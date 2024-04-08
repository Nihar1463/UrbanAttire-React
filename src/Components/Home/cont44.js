import "./cont44.css";
import Tshirtoff from "../image/tshirt_off.png";
import Shirtoff from "../image/shirt_off.png";
import Jeansoff from "../image/jeans_off.png";
import Trouserstoff from "../image/trouser_off.png";
function Cont44() {
  return (
    <>
      <div id="sale">
        <h1>SALE IS ON...</h1>
      </div>

      <div id="cont44">
        <div class="item">
          <div class="img1">
            <img src={Tshirtoff} alt="" />
          </div>
          <p>T-Shirts</p>
          <h2>UP TO 70% OFF</h2>
        </div>
        <div class="item">
          <div class="img1">
            <img src={Shirtoff} alt="" />
          </div>
          <p>Casual Shirts</p>
          <h2>UP TO 55% OFF</h2>
        </div>
        <div class="item">
          <div class="img1">
            <img src={Jeansoff} alt="" />
          </div>
          <p>Jeans</p>
          <h2>UP TO 40% OFF</h2>
        </div>
        <div class="item">
          <div class="img1">
            <img src={Trouserstoff} alt="" />
          </div>
          <p>Trousers</p>
          <h2>UP TO 33% OFF</h2>
        </div>
      </div>
    </>
  );
}
export default Cont44;
