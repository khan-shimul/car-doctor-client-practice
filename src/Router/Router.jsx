import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Register/Login/Login";
import Register from "../pages/Register/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import ProtectRoute from "./ProtectRoute";
import Booking from "../pages/Booking/Booking";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <ProtectRoute>
            <Checkout />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <ProtectRoute>
            <Booking />
          </ProtectRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
