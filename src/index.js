import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cont3 from "./Components/Home/cont3";
import Swip_p1 from "./Components/swiper_product/swiper_page1";
import Homeconts from "./Page/home";
import Swiper1 from "./Page/swiper_p1";
import Swiper2 from "./Page/swiper2";
import Swiper2_blue from "./Page/swiper2_blue";
import Swiper4 from "./Page/swiper4";
import Swiper3 from "./Page/Swiper3";
import Swiper5 from "./Page/swiper5";
import Arrival_new from "./Page/Arrival_new";
import New_arrival_shirt from "./Page/Shirt_arrival";
import New_arrival_Tshirt from "./Page/Tshirt_arrival";
import New_arrival_Jeans from "./Page/Jeans_arrival";
import New_arrival_Shorts from "./Page/Shorts_arrival";
import All_Shirt from "./Components/Shirt/All_shirt";
import Full_Sleeve_Shirt from "./Components/Shirt/Full_Sleeve";
import Half_Sleeve_Shirt from "./Components/Shirt/Half_Sleeve";
import Login2 from "./Components/Login/login2";

const router = createBrowserRouter([
  {
    path: "/UrbanAttrire-React",
    element: <App />,
  },
  {
    path: "/swip1",
    element: <Swip_p1 />,
  },
  {
    path: "/homepage",
    element: <Homeconts />,
  },
  {
    path: "/white",
    element: <Swiper2 />,
  },
  {
    path: "/blue",
    element: <Swiper2_blue />,
  },
  {
    path: "/seaside_shirt",
    element: <Swiper2 />,
  },
  {
    path: "/jeans_sw4",
    element: <Swiper4 />,
  },
  {
    path: "/hoodie",
    element: <Swiper3 />,
  },
  {
    path: "/zipper",
    element: <Swiper5 />,
  },
  {
    path: "/UrbanAttrire-React",
    element: <Homeconts />,
  },
  {
    path: "/New_Arrival",
    element: <Arrival_new />,
  },
  {
    path: "/New_arrival_shirt",
    element: <New_arrival_shirt />,
  },
  {
    path: "/New_arrival_Tshirt",
    element: <New_arrival_Tshirt />,
  },
  {
    path: "/New_arrival_jeans",
    element: <New_arrival_Jeans />,
  },
  {
    path: "/New_arrival_Shorts",
    element: <New_arrival_Shorts />,
  },
  {
    path: "/All_Shirt",
    element: <All_Shirt />,
  },
  {
    path: "/long_sleeve_shirt",
    element: <Full_Sleeve_Shirt />,
  },
  {
    path: "/Short_sleeve_shirt",
    element: <Half_Sleeve_Shirt />,
  },
  {
    path: "/Login",
    element: <Login2 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
