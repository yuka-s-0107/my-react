// import { useState } from "react";

// const getRandomValue = (random) => {
//   return Math.floor(Math.random() * random);
// };

export default function OmikujiButton({ date, omikuji }) {
  //   const [state, setState] = useState();
  //   const getOmikuji = () => {
  //     const value = getRandomValue(5);
  //     if (value === 0) {
  //       setState("大吉");
  //     } else if (value === 1) {
  //       setState("吉");
  //     } else if (value === 2) {
  //       setState("小吉");
  //     } else if (value === 3) {
  //       setState("凶");
  //     } else {
  //       setState("大凶");
  //     }
  //   };

  return (
    <div>
      {/* <button onClick={getOmikuji}>おみくじ</button> */}
      <p>
        {omikuji}:{date}
      </p>
    </div>
  );
}
