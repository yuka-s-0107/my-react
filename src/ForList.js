import React from "react";

//書籍はProps(src)経由で受け取る
export default function ForList({ src }) {
  return (
    //書籍情報(src属性)を<dt>/<dd>リストに整形
    <dl>
      {src.map((elem) => (
        <>
          <React.Fragment key={elem.isbn}>
            <dt>
              <a
                href={`htps://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}
              >
                {elem.title}({elem.price}円)
              </a>
            </dt>
            <dd>{elem.summary}</dd>
          </React.Fragment>
        </>
      ))}
    </dl>
  );
}
