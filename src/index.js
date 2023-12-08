import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import MyHello from "./MyHello";
// import EventBasic from "./textbook";
// import OmikujiButton from "./Omikuji";
// import { Today } from "./textbook";
// import StateBasic from "./textbook";

// import books from "./books";
// import ForList from "./ForList";
// import ForFilter from "./ForFilter";
// import ForSort from "./ForSort";
import ForItem from "./ForItem";
// import StyledPanel from "./StyledPanel";
// import StateParent from "./StatePrent";

// import Omikuji2 from "./Omikuji2";
import StateOmikuji from "./StateOmikuji";
import books from "./books";
// import StateTodo from "./StateTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <>
    {/* <div> */}
    {/* <MyHello myName="ゲゲゲの鬼太郎" /> */}
    {/* <EventBasic type="time" /> */}
    {/* </div> */}

    {/* <div>
      <Today type="date"></Today>
    </div> */}

    {/* <ForList src={books} /> */}
    {/* <ForFilter src={books} /> */}
    {/* <ForSort src={books} /> */}
    {/* <ForItem books={{ ...books[0] }}></ForItem> */}
    <ForItem src={books} />
    {/* <StyledPanel>
      <p>メンバー募集中！</p>
      <p>ようこそ、WINGSプロジェクトへ！！</p>
    </StyledPanel> */}
    {/* <StateParent /> */}

    {/* <Omikuji2 init={""} /> */}
    {/* <StateTodo /> */}
    <StateOmikuji />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
