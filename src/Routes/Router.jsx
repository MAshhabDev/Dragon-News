import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Component/Pages/Home";
import CategoryNews from "../Component/Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Component/Pages/Login";
import Registration from "../Component/Pages/Registration";
import NewsDetails from "../Component/Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Component/Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>
      }
    ],
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute> 
      <NewsDetails> </NewsDetails>
      </PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement:<Loading></Loading>
  },

  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },

]);

export default router;
