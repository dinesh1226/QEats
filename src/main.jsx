import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import App from "./App";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import About from "./components/About.jsx";

const About = lazy(() => import("./components/About.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
