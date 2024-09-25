import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { TopBarLayout } from "../layouts/TopBarLayout/TopBarLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBarLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
