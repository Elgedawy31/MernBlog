import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const LoginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://blogapi-0okg.onrender.com/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/");
      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container login ">
      <h1
        className="mb-8 text-4xl font-bold text-center"
        style={{ color: "#333" }}
      >
        LOGIN
      </h1>

      <form className="flex  flex-col" onSubmit={LoginHandler}>
        <input
          type="text"
          placeholder="Enter Your UserName"
          className="mb-6 "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-fit button">
          Login
        </button>
      </form>
      <h1 className="text-2xl mt-8 w-fit mx-auto">
        Create New Acount?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </h1>

      <h1 className="text-4xl mt-8 w-fit mx-auto text-red-700">{error}</h1>
    </div>
  );
}

export default Login;
