import "./header.css";
import Logo from "../image/logo22-removebg-preview.png";
import { Link } from "react-router-dom";
function Head() {
  return (
    <>
      <header>
        <div id="hleft">
          <Link to="/Login">
            <p class="p">
              <i class="fa-solid fa-user"></i>
              Login
            </p>
          </Link>
          <Link to="/Location">
            <p class="p">
              <i class="fa-solid fa-location-dot"></i>
              Location
            </p>
          </Link>
        </div>
        <div id="hcenter">
          <Link to="/UrbanAttrire-React">
            <img src={Logo} alt="image_logo" id="logo" />
          </Link>
        </div>
        <div id="hright">
          <div class="dropdown">
            <button class="dropbtn">Men</button>
            <div class="dropdown-content">
              <Link to="/New_Arrival">Men's New Arrival </Link>

              <Link to="/All_Shirt">Men's Shirts</Link>
              <a href="#">Men's T-Shirts</a>
              <a href="#">Men's Jeans</a>
              <a href="#">Men's shorts</a>
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
