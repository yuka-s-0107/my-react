import { useState } from "react";

//Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;
export default function StateTodo() {
  //入力値（title）、Todoリスト（todo）をStateで管理
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  //テキストボックスでｈの入力をStateに反映
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    //新規のTodoを追加
    setTodo([
      ...todo,
      {
        id: ++maxId, //id値
        title, //Todo本体
        created: new Date(), //作成日時
        isDone: false, //実行済みか
      },
    ]);
  };

  return (
    <div>
      <label>
        やること：
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      {/* Todoリストに整形 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
