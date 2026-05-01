import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouter/MainLayouts";
import Home from "../Components/Home";
import AuthLayouts from "../Layouter/AuthLayouts";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Services from "../Components/Services";
import Coverage from "../Components/Coverage";
import AboutUs from "../Components/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
