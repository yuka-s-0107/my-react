// import { useState } from "react";

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};

export default function OmikujiButton({ init }) {
  // const [state,setState] = useState;
  const getOmikuji = () => {
    const setState = getRandomValue(5);
    if (setState === 0) {
      console.log("大吉");
    } else if (setState === 1) {
      console.log("吉");
    } else if (setState === 2) {
      console.log("小吉");
    } else if (setState === 3) {
      console.log("凶");
    } else {
      console.log("大凶");
    }
  };

  return (
    <div>
      <button onClick={getOmikuji}>おみくじ</button>
    </div>
  );
}
