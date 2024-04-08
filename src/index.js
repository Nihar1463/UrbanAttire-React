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

const router = createBrowserRouter([
  {
    path: "/",
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
