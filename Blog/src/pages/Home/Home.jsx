import "./Home.scss";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [Posts, setPosts] = useState([1, 2, 3]);

  useEffect(() => {
    const PostsData = async () => {
      const AllPostsData = await axios.get(
        "https://blogapi-0okg.onrender.com/post/getposts"
      );

      setPosts(AllPostsData.data.PostsData);
    };

    PostsData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        {Posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
