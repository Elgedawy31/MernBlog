import { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const RegisterFunc = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    try {
      const response = await axios.post(
        "https://blogapi-0okg.onrender.com/auth/register",
        formData
      );

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/");
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div>
      <div className="container login ">
        <h1
          className="mb-8 text-4xl font-bold text-center"
          style={{ color: "#333" }}
        >
          REGISTER
        </h1>
        <form className="flex  flex-col" onSubmit={RegisterFunc}>
          <input
            type="text"
            placeholder="Enter Your UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
          <input
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            name="avatar"
          />
          <button type="submit" className="button">
            Register
          </button>
        </form>
        <h1 className="text-2xl mt-8 w-fit mx-auto">
          Have Allready An Acount?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Register;
