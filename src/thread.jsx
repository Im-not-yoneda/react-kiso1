import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Thread = () => {
  // 表示する配列をセットする
  const [thread, setThread] = useState();

  // 配列を取得する
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        const titles = result.map((item) => (
          <li key={item.id}>
            <Link to={"/thread/" + item.id} state={{ titleName: item.title }}>
              {item.title}
            </Link>
          </li>
        ));
        return setThread(titles);
      });
  }, []);

  return (
    <div className="thread">
      <h2>新着スレッド</h2>
      <ul>{thread}</ul>
    </div>
  );
};

export default Thread;
