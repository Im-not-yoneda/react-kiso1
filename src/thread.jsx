import React, { useEffect, useState } from "react";

export const Thread = () => {
  // 表示する配列をセットする
  const [thread, setThread] = useState();

  // 配列を取得する
  const getThread = fetch(
    "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      const titles = result.map((item) => <li key={item.id}>{item.title}</li>);
      return setThread(titles);
    });

  return (
    <div className="thread">
      <h2>新着スレッド</h2>
      <ul>{thread}</ul>
    </div>
  );
};

export default Thread;