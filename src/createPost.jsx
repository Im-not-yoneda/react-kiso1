import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreatePost = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const makeUrl = `/thread/${params.postId}`;
  const [makePost, setMakePost] = useState("");
  const enterPost = () => {
    if (makePost === "") {
      alert("空ですよ！");
    } else {
      fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${params.postId}/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post: makePost }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            console.log("error!");
          }
          console.log("ok!");
          return response.json();
        })
        .then((data) => {
          setMakePost("");
          console.log(data);
          navigate(makeUrl, { state: { titleName: props.title } });
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <form>
      <input
        value={makePost}
        onChange={(inputText) => setMakePost(inputText.target.value)}
        type="text"
        placeholder="投稿しよう！"
      />
      <button type="button" onClick={enterPost}>
        投稿
      </button>
    </form>
  );
};

export default CreatePost;
