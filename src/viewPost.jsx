import { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router-dom";

export const Post = () => {
  const params = useParams();
  const location = useLocation();
  const { titleName } = location.state;
  const [allpost, setAllpost] = useState();

  useEffect(() => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${params.postId}/posts`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((result) => {
        const postList = result.posts.map((item) => (
          <li key={item.id}>{item.post}</li>
        ));
        return setAllpost(postList);
      });
  }, [params]);
  return (
    <div className="post">
      <h2>{titleName}</h2>
      <ul>{allpost}</ul>
    </div>
  );
};
