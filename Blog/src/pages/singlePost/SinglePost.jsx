import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const navigate = useNavigate();

  const [singlepost, setSinglepost] = useState("");

  const state = useSelector((state) => state);

  useEffect(() => {
    const singlePost = async () => {
      const Post = await axios.get(
        `https://blogapi-0okg.onrender.com/post/getpost/${params.id}`
      );

      setSinglepost(Post.data.post);
    };

    singlePost();
  }, [params]);

  const DeleteHandler = async () => {
    try {
      await axios.delete(
        `https://blogapi-0okg.onrender.com/post/deletepost/${params.id}` ,{data:{id:state.auth.id}});

      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div
      className="container  "
      style={{ marginTop: "50px", minHeight: "100vh" }}
    >
      <img
        src={singlepost.img}
        style={{
          width: "100%",
          margin: "auto",
          maxHeight: "400px",
          objectFit: "cover",
        }}
        className="rounded"
        alt=""
      />

      <h1 className="my-10 text-5xl font-bold">{singlepost.title}</h1>
      <p className="text-xl" style={{ lineHeight: "35px", color: "#777" }}>
        {singlepost.desc}
      </p>

      <button
        className="button  my-8"
        style={{ width: "fit-content" }}
        onClick={DeleteHandler}
      >
        Delete
      </button>
    </div>
  );
}

export default SinglePost;
