// import { useState } from "react";

import { useState } from "react";
import OmikujiButton from "./Omikuji";

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};
//親コンポーネント
export default function EventBasic({ type }) {
  const [state, setState] = useState({ date: "", omikuji: "" });
  //clickイベントハンドラー

  const getOmikuji = () => {
    const value = getRandomValue(5);
    let result = "";
    if (value === 0) {
      result = "大吉";
    } else if (value === 1) {
      result = "吉";
    } else if (value === 2) {
      result = "小吉";
    } else if (value === 3) {
      result = "凶";
    } else {
      result = "大凶";
    }
    return result;
  };

  const current = () => {
    const omikuji = getOmikuji();
    const d = new Date();
    //type属性の値に応じて現在日時をログに出力
    switch (type) {
      case "date":
        setState((p) => ({ date: d.toLocaleDateString(), omikuji }));
        break;
      case "time":
        setState((p) => ({ date: d.toLocaleTimeString(), omikuji }));
        break;
      default:
        setState((p) => ({ date: d.toLocaleString(), omikuji }));

        break;
    }
  };

  return (
    <div>
      {/*ボタンクリック時にcurrent関数を呼び出し*/}

      <button onClick={current}>おみくじ</button>
      <OmikujiButton date={state.date} omikuji={state.omikuji} />
    </div>
  );
}
// export default function StateBasic({ init }) {
//   const [count, setCount] = useState(init);
//   const handleClick = () => setCount(count + 1);
//   return (
//     <>
//       <button onClick={handleClick}>カウント</button>
//       <p>{count}回クリックされました。</p>
//     </>
//   );
// }

// //親コンポーネント
// export function Today(type) {
//   const d = new Date();
//   //type属性の値に応じて現在日時をログに出力
//   switch (type) {
//     case "date":
//       console.log(d.toLocaleDateString());
//       break;
//     case "time":
//       console.log(d.toLocaleTimeString());
//       break;
//     default:
//       console.log(d.toLocaleString());
//       break;
//   }
// }
