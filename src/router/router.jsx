import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { TopBarLayout } from "../layouts/TopBarLayout/TopBarLayout";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { SearchCategoryPage } from "../pages/SearchCategoryPage/SearchCategoryPage";

export const routes = {
  home: "/",
  services: "/services",
  aboutUs: "/about-us",
  login: "/login",
  register: "/register",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <TopBarLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.services,
        element: <ServicesPage />,
      },
      {
        path: routes.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.register,
        element: <RegisterPage />,
      },
      {
        path: "/search/:category",
        element: <SearchCategoryPage />,
      },
    ],
  },
]);
