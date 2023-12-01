import React from "react";

export default function OmikujiList({ src }) {
  return (
    <dl>
      {src.map((elem) => (
        <>
          <dd>{elem}</dd>
        </>
      ))}
    </dl>
  );
}
