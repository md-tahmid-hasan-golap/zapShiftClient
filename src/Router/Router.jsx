import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouter/MainLayouts";
import Home from "../Components/Home";
import AuthLayouts from "../Layouter/AuthLayouts";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Services from "../Components/Services";
import Coverage from "../Components/Coverage";
import AboutUs from "../Components/AboutUs";
import Errorpage from "../Components/Errorpage";
import DashbordLayouts from "../Layouter/DashbordLayouts";
import MyParcels from "../Components/MyParcels";
import Private from "./Private";

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
        loader: () => fetch("/serviceCenters.json"),
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
  {
    path: "dashboard",
    Component: DashbordLayouts,
    children: [
      {
        path: "myParcels",
        element: (
          <Private>
            <MyParcels />
          </Private>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: Errorpage,
  },
]);
