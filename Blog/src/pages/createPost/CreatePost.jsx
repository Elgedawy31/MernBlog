import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function CreatePost() {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const CreateHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("img", img);

      await axios.post(
        `https://blogapi-0okg.onrender.com/post/create/${params.id}`,
        formData
      );

      navigate("/");

      window.location.reload();
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <div className="container login ">
      <h1
        className="mb-8 text-4xl font-bold text-center"
        style={{ color: "#333" }}
      >
        Creat New Post
      </h1>

      <form className="flex  flex-col" onSubmit={CreateHandler}>
        <input
          type="text"
          placeholder="title"
          className="mb-6 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="mb-8"
          style={{
            border: "1px solid #ddd",
            borderRadius: "6px",
            resize: "none",
            height: "150px",
            padding: "5px",
          }}
          type="title"
          placeholder="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="file"
          name="img"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button type="submit" className="w-fit button">
          create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
