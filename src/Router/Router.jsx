import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouter/MainLayouts";
import Home from "../Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
