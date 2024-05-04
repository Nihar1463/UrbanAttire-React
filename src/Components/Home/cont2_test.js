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
import Imgg11 from "../image/swiper_img/item11.webp";
import Imgg1 from "../image/swiper_img/itm1.webp";

import Imgg1srt from "../image/Men_arrival/shirt/Srt1.webp";
import Imgg11srt from "../image/Men_arrival/shirt/Srt11.webp";
import Imgg3srt from "../image/Men_arrival/shirt/srt3.webp";
import Imgg33srt from "../image/Men_arrival/shirt/srt33.webp";
import Imgg4srt from "../image/Men_arrival/shirt/srt4.webp";
import Imgg44srt from "../image/Men_arrival/shirt/srt44.webp";
import Imgg5srt from "../image/Men_arrival/shirt/srt5.webp";
import Imgg55srt from "../image/Men_arrival/shirt/srt55.webp";
import Imgg6srt from "../image/Men_arrival/shirt/srt6.webp";
import Imgg66srt from "../image/Men_arrival/shirt/srt66.webp";
import Imgg7srt from "../image/Men_arrival/shirt/srt7.webp";
import Imgg77srt from "../image/Men_arrival/shirt/srt77.jpg";

import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Cont2_test() {
  const { addToCart } = useCart();

  const New_arrival = [
    {
      id: 17,
      img: Imgg1srt,
      img2: Imgg11srt,
      name: "The Short Sleeve Hawthorne",
      price: "₹1199.00",
    },
    {
      id: 18,
      img: Imgg3srt,
      img2: Imgg33srt,
      name: "The Short Sleeve Moss Floral",
      price: "₹1499.00",
      arrival: "New Arrival",
    },
    {
      id: 19,
      img: Imgg4srt,
      img2: Imgg44srt,
      name: "The Harwich Brick Shirt",
      price: "₹1099.00",
    },
    {
      id: 1,
      img: Imgg1,
      img2: Imgg11,
      name: "The Short Sleeve Carter",
      price: "₹1499.00",
    },
    {
      id: 22,
      img: Imgg6srt,
      img2: Imgg66srt,
      name: " The Short Sleeve Floral",
      price: "₹1499.00",
      arrival: "New Arrival",
    },
  ];
  return (
    <>
      <div id="cont2">
        <p id="para">BEST SELLING SHIRTS</p>
        <div class="product_C2_arrrival ">
          <div class="content_arrrival_cont2 ">
            {New_arrival.map((product) => (
              <div class="items_Sw1_cont2" key={product.id}>
                <div class="itmImg_Sw1_cont2">
                  <div id="ppp_cont2">
                    <p>Best Seller</p>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt="" class="imgg_Sw1_cont2" />
                    <img src={product.img2} alt="" class="imgg2_Sw1_cont2" />
                  </Link>
                </div>
                <div class="itm_name_Sw1_cont2">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>

                  <button class="cartbtn_Sw1_cont2" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cont2_test;
