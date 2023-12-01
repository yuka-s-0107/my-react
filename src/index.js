import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import MyHello from "./MyHello";
import EventBasic from "./textbook";
// import OmikujiButton from "./Omikuji";
// import { Today } from "./textbook";
// import StateBasic from "./textbook";

import books from "./books";
import ForList from "./ForList";
import Omikuji2 from "./Omikuji2";
import OmikujiList from "./OmikujiList";
import OmikujiList2 from "./OmikujiList2";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <>
    <div>
      {/* <MyHello myName="ゲゲゲの鬼太郎" /> */}
      <EventBasic type="time" />
    </div>

    {/* <div>
      <Today type="date"></Today>
    </div> */}

    <ForList src={books} />
    <Omikuji2 init={""} />
    <OmikujiList src={OmikujiList2} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
