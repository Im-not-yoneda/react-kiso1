import { useState } from "react";

export const New = () => {
  const [text, setText] = useState("");

  const makeThread = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("error!");
        }
        console.log("ok!");
        return response.json();
      })
      .then((data) => {
        setText("");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="new">
      <h2>スレッド新規作成</h2>
      <div className="inputTitle">
        <form>
          <input
            value={text}
            onChange={(inputText) => setText(inputText.target.value)}
            type="text"
            placeholder="スレッドタイトル"
          />
          <button type="submit" formAction="/" onClick={makeThread}>
            作成
          </button>
        </form>
        <a href="/">Topに戻る</a>
      </div>
    </div>
  );
};

export default New;
