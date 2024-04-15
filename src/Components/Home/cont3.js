import "./cont3.css";
import img1 from "../image/swiper1.webp";
import img2 from "../image/swiper2.webp";
import img3 from "../image/swiper5.webp";
import img4 from "../image/swiper_img/swiper3.webp";
import img5 from "../image/swiper_img/swip4.webp";
// import Cont333 from "../image/cont333.webp";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Cont3() {
  return (
    <>
    <div id="cont3">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <div class="swiper-slide">
            <div class="swiper_text123">
              <p class="swip_p">TS X MINERAL WORKSHOP</p>
              <h2 class="swip_h2">Indigo Alchemy</h2>
              <Link to="/swip1"><button class="swipbtn">SHOP NOW</button></Link>
            </div>

            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="swiper_text123">
              <p class="swip_p">THE CONARD SHIRT IN SEASIDE EMBROIDERY</p>
              <h2 class="swip_h2">
                VINTAGE <br />
                CHARACTER
              </h2>
              <Link to="/seaside_shirt"><button class="swipbtn">SHOP NOW</button></Link>
            </div>

            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="swiper_text345">
              <p class="swip_p">THE CHAMPMAN ANORAK IN LIGHT KHAKI</p>
              <h2 class="swip_h2">
                BUILD <br />
                TO EXPLORE
              </h2>
             <Link to="/zipper"> <button class="swipbtn">SHOP NOW</button></Link>
            </div>

            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="swiper_text345">
              <p class="swip_p">THE CRAWFORD CREW SWEATER IN WASH ASPHAlT</p>
              <h2 class="swip_h2">
                THE EFFORTLESS <br /> STEPLE
              </h2>
              <Link to="/hoodie"><button class="swipbtn">SHOP NOW</button></Link>
            </div>

            <img src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper-slide">
            <div class="swiper_text345">
              <p class="swip_p">SPRING 2024</p>
              <h2 class="swip_h2">
                THE BARNSTABLE <br />
                COLLECTION
              </h2>
              <Link to="/jeans_sw4"><button class="swipbtn">SHOP NOW</button></Link>
            </div>

            <img src={img5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

// function Cont3(){
// return(
// <>
// <div id="cont3">
//         <div id="cont3_left">
//           <p id="p1">Comfort Comes in Many Styles</p>
//           <h2>
//             OUR DENIM WILL MAKE WORKING FROM WORK FEEL JUST LIKE WORKING FROM
//             HOME.
//           </h2>
//           <p id="p2">
//             I'm a paragraph. Click here to add your own text and edit me. I’m a
//             great place for you to tell a story and let your users know a little
//             more about you.
//           </p>
//           <button id="cont3_shopbtn">Shop All Denim</button>

//         </div>
//         <div id="cont3_right">
//           <img src={Cont333} alt="" id="right_img" />
//         </div>
//       </div>
// </>
// )
// }
export default Cont3;
