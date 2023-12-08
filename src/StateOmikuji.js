import { useState } from "react";

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};

//Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;
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
    let data = "";
    if (value === 0) {
      data = "大吉";
    } else if (value === 1) {
      data = "吉";
    } else if (value === 2) {
      data = "小吉";
    } else if (value === 3) {
      data = "凶";
    } else {
      data = "大凶";
    }
    return data;
  };

  const setOmikuji = () => {
    const data = getOmikuji();
    //set○○を使う時は（）の中に設定する値を入れる
    setState(data);
    setResult([
      // ...で今まで配列に入れてた中身を展開する
      ...result,
      //今までに出したやつ（...result）に新たにもう一個追加
      {
        id: ++maxId,
        data,
      },
    ]);
  };

  const deleteOmikuji = (id) => {
    console.log(id);
    const list = result.filter((v) => v.id !== id);
    setResult(list);
  };
  const updateOmikuji = (id) => {
    console.log(id);
    const data = getOmikuji();
    //条件演算子↓
    const list = result.map((v) => (v.id === id ? { id, data } : v));
    setResult(list);
  };

  return (
    <div>
      <p>おみくじ</p>
      {/* ボタンを押したら｛getomikuji｝が呼ばれる */}
      <button onClick={setOmikuji}>結果リスト</button>
      <hr />
      {/* Todoリストに整形 */}
      <ul>
        {/* itemはresultの中身（item部分の名前は何でも良い） */}
        {result.map((item) => (
          <li key={item.id}>
            {/* ()=>を付けないとボタン押す前にもう実行されちゃってることになる */}
            {item.data}{" "}
            <button onClick={() => deleteOmikuji(item.id)}>削除</button>
            <button onClick={() => updateOmikuji(item.id)}>もう一度</button>
          </li>
        ))}
      </ul>
      {/* 今回実行した最新のものがstateに入る */}
      <p>{state}</p>
    </div>
  );
}
