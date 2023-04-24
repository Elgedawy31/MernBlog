import { useEffect, useState } from "react";
import "./Post.scss";
import { Link } from "react-router-dom";
import axios from "axios";
function Post({ title, desc, img, createdAt, author, _id }) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (author !== undefined) {
      const Auth = async () => {
        const data = await axios.get(
          `https://blogapi-0okg.onrender.com/post/getuser/${author}`
        );

        setUsername(data.data.getuser.username);
      };
      Auth();
    }
  }, [author]);
  return (
    <div className="post">
      <div className="images">
        <img src={img} alt="" />
      </div>
      <div className="texts">
        <h2>{title} </h2>
        <div className="info">
          <Link to="/">{username || "elsaid hamdy"}</Link>
          <time>{createdAt}</time>
        </div>
        <p>{desc}</p>
        <Link
          to={`post/${_id}`}
          className="underline "
          style={{ color: "rgb(53, 119, 97)" }}
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default Post;
