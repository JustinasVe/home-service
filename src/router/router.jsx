import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
