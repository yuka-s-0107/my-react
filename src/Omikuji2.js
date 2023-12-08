import { useState } from "react";

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};

export default function Omikuji2({ init }) {
  const [state, setState] = useState(init);
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
  };

  return (
    <div>
      <button onClick={getOmikuji}>おみくじリスト</button>
      <p>{state}</p>
    </div>
  );
}
