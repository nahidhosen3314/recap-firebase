
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root"
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import UpdateProfile from "../pages/UpdateProfile";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Property from "../pages/Property";
import PriviteRouts from "./PriviteRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/update',
            element: <PriviteRouts> <UpdateProfile></UpdateProfile> </PriviteRouts>
        },
        {
            path: '/contact',
            element: <PriviteRouts> <Contact></Contact> </PriviteRouts>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/property/:id',
            element: <PriviteRouts><Property></Property></PriviteRouts>,
            loader: () => fetch("../../properties.json")
            
        }
      ]
    },
  ]);

  export default router;