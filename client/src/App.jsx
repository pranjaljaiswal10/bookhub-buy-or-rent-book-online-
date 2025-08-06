import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "../Layout";
import Home from "./pages/home";
import Store from "./pages/Store";
import Bookdetail from "./pages/Bookdetail";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Trackorder from "./pages/Trackorder";
import About from "./pages/About";
import Auth from "./pages/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
        children: [
          {
            path: ":id",
            element: <Bookdetail />,
          },
          {
            path: "Cart",
            element: <Cart />,
          },
          {
            path: "track-order",
            element: <Trackorder />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

export default appRouter;
