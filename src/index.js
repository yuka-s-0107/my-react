import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import MyHello from "./MyHello";
import EventBasic from "./textbook";
import OmikujiButton from "./Omikuji";
import { Today } from "./textbook";
// import StateBasic from "./textbook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const name = "江戸川コナン";
root.render(
  <>
    <div>
      <p> こんにちは、世界！</p>
      <p>はじめまして、React</p>
    </div>
    <div>
      <p>{name}、探偵さ。</p>
    </div>
    <div>
      <MyHello myName="ゲゲゲの鬼太郎" />
      <EventBasic type="date" />
    </div>

    <br></br>
    <p>★おみくじ</p>
    <div>
      <Today type="date"></Today>
      <OmikujiButton />
    </div>
    {/* <div>
      <StateBasic init={0}></StateBasic>
    </div> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
