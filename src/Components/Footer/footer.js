import "./footer.css";
import Icn1 from "../image/footer_icon11.png";
import Icn2 from "../image/footer_icon22.png";
import Pymt1 from "../image/Visa.webp";
import Pymt2 from "../image/PayPal.webp";
import Pymt3 from "../image/AmericanExpress.webp";
import Pymt4 from "../image/JCB_payment.webp";
import Pymt5 from "../image/Diners_payment.webp";
import Pymt6 from "../image/Discover_payment.webp";
import Pymt7 from "../image/MasterCard.webp";
import LogoF from "../image/logo22-removebg-preview.png";
function Footer() {
  return (
    <>
      <footer>
        <div id="ft1">
          <h1>INSTAGRAM</h1>
          <img src={Icn1} alt="" id="fot_icon" />
          <h1>TWITER</h1>
          <img src={Icn2} alt="" id="fot_icon" />
          <h1>PINTEREST</h1>
        </div>
        <div id="ft2">
          <div class="ft2_item1">
            <h4>HEADQUARTERS</h4>
            <p>
              555 Rajvi Complex Maninagar Road, A'Bad-380008
              info@urbanattire.com +91-8490841934
            </p>
          </div>

          <div class="ft2_item2">
            <h4>MENU</h4>
            <p>Mens</p>
            <p>Accessories</p>
            <p>Discover</p>
            <p>Clearance</p>
          </div>
          <div class="ft2_item3">
            <h4>POLICY</h4>
            <p>Shipping & Returns</p>
            <p>Store Policy</p>
            <p>Payment Methods</p>
            <p>Contact</p>
          </div>
          <div class="ft2_item4">
            <p>Join Our Mailing List</p>
            <h4>GET 15% OFF AND ENJOY SALES PERKS ON YOUR FIRST ORDER.</h4>
            <p>Email Address</p>
            <input type="text" placeholder="" />
            <button id="submit">Submit</button>
          </div>
          <div class="ft2_item5">
            <h4>SOCIAL</h4>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
        <div id="payment">
          <div id="payment_left">
            <h3>WE ACCEPT THE FOLLOWING PAYMENT METHODS</h3>
          </div>
          <div id="payment_right">
            <img src={Pymt1} alt="" />
            <img src={Pymt7} alt="" />
            <img src={Pymt3} alt="" />
            <img src={Pymt4} alt="" />
            <img src={Pymt5} alt="" />
            <img src={Pymt6} alt="" />
            <img src={Pymt2} alt="" />
          </div>
        </div>
        <div id="footer_last">
          <p>© 2035 by UrbanAttire. Powered and secured by NB PVT.LTD</p>
          <img src={LogoF} alt="" />
        </div>
      </footer>
    </>
  );
}
export default Footer;
