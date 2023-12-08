import Download from "./Download";

export default function ForItem({ book }) {
  //   let dd;
  //downloadプロパティの正否に応じてタグを分岐
  //   if (book.download) {
  //     dd = (
  //       <dd>
  //         <Download isbn={book.isbn} />
  //       </dd>
  //     );
  //   } else {
  //     dd = <dd>{book.summary}</dd>;
  //   }

  return (
    <>
      {/* <React.Fragment key={elem.isbn}> */}
      <dl>{src.map(book=>(
      // <dt>
        <>
         <dt>
          <a href={`htps://wings.msn.to/books/${book.isbn}/${book.isbn}.jpeg`}>
            {book.title}({book.price}円)
          </a>
          </dt>
          <dd>{book.summary}</dd></>
      {/* </React.Fragment> */}
      (() => {
        if (book.download) {
          return (
            <dd>
              {book.summary}
              <Download isbn={book.isbn} />
            </dd>
          );
        } else {
          return <dd>{book.summary}</dd>;
        }
      })()
      </dl>
    </>
  );
}
