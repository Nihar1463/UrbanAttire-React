import "./header.css";
import Logo from "../image/logo22-removebg-preview.png";
import { Link } from "react-router-dom";
function Head() {
  return (
    <>
      <header>
        <div id="hleft">
          <p class="p">
            <i class="fa-solid fa-user"></i>
            Login
          </p>
          <p class="p">
            <i class="fa-solid fa-location-dot"></i>
            Location
          </p>
        </div>
        <div id="hcenter">
          <Link to="/homepage"><img src={Logo} alt="image_logo" id="logo" /></Link>
        </div>
        <div id="hright">
          <div class="dropdown">
            <button class="dropbtn">Men</button>
            <div class="dropdown-content">
              <a href="#">Men's New Arrival </a>
              <a href="#">Men's Best Seller</a>
              <a href="#">Men's Jeans</a>
              <a href="#">Men's shorts</a>
              <a href="#">Men's Jackets</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Accessories</button>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Discover</button>
            <div class="dropdown-content">
              <a href="#">Blog</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Clearance</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Head;
