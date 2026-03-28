import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Component/Pages/Home";
import CategoryNews from "../Component/Pages/CategoryNews";

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
        loader:()=>fetch("/news.json")
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
