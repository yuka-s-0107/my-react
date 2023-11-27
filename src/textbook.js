// import { useState } from "react";

//親コンポーネント
export default function EventBasic({ type }) {
  //clickイベントハンドラー
  const current = () => {
    const d = new Date();
    //type属性の値に応じて現在日時をログに出力
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };
  return (
    <div>
      {/*ボタンクリック時にcurrent関数を呼び出し*/}
      <button onClick={current}>日付を取得</button>
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

//親コンポーネント
export function Today(type) {
  const d = new Date();
  //type属性の値に応じて現在日時をログに出力
  switch (type) {
    case "date":
      console.log(d.toLocaleDateString());
      break;
    case "time":
      console.log(d.toLocaleTimeString());
      break;
    default:
      console.log(d.toLocaleString());
      break;
  }
}
