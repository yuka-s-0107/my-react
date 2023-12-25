import { useState } from "react";

export default function FormList() {
  //Stateを初期化
  const [form, setForm] = useState({
    animal: ["dog", "humster"],
  });
  //リストボックスの変更時に入力値をStateに反映
  const handleFormList = (e) => {
    console.log("aaa");
    //選択肢を格納するための配列
    const data = [];
    //<option>要素を順に捜査し、選択状態にある値を配列に追加
    const opts = e.target.options;
    console.log(e);
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    //最終的な結果をStateに反映
    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  //[送信]ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物</label>
      <br />
      <select
        id="animal"
        name="animal"
        value={form.animal}
        size="4"
        multiple={true}
        onChange={handleFormList}
      >
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="rabbit">ウサギ</option>
        <option value="humster">ハムスター</option>
        <option value="another">その他</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
