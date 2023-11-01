import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { CreatePost } from "./createPost";

export const Post = () => {
  const params = useParams();
  const location = useLocation();
  const { titleName } = location.state;
  const [allpost, setAllpost] = useState();

  useEffect(() => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${params.postId}/posts`,
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
      <div className="post-all">
        <h2>{titleName}</h2>
        <ul>{allpost}</ul>
      </div>
      <div className="post-create">
        <CreatePost title={titleName} />
      </div>
    </div>
  );
};
