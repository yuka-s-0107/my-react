import { useState } from "react";

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};

//Todo項目idの最大値（登録都度にインクリメント）
let maxId = 4;
export default function StateOmikuji() {
  //おみくじの入力値（state）、結果（result）をStateで管理
  const [state, setState] = useState("");
  const [result, setResult] = useState([]);

  //テキストボックスでへの入力をStateに反映
  // const handleChangeTitle = (e) => {
  //   setState(e.target.value);
  // };

  const getOmikuji = () => {
    const value = getRandomValue(5);
    if (value === 0) {
      setState("大吉");
    } else if (value === 1) {
      setState("吉");
    } else if (value === 2) {
      setState("小吉");
    } else if (value === 3) {
      setState("凶");
    } else {
      setState("大凶");
    }
    const data = setState();
    setResult([
      ...result,
      {
        id: ++maxId,
        data,
      },
    ]);
  };

  return (
    <div>
      <p>おみくじ</p>
      <button onClick={getOmikuji}>結果リスト</button>
      <hr />
      {/* Todoリストに整形 */}
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.state}</li>
        ))}
      </ul>
      <p>{state}</p>
    </div>
  );
}
