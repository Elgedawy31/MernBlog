import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Footer from "./components/Footer/Footer";
import CreatePost from "./pages/createPost/CreatePost";
import SinglePost from "./pages/singlePost/SinglePost";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "newpost/:id",
          element:<CreatePost />
        },{
          path:'post/:id' ,
          element: <SinglePost />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
