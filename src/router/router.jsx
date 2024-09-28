import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { TopBarLayout } from "../layouts/TopBarLayout/TopBarLayout";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { SearchCategoryPage } from "../pages/SearchCategoryPage/SearchCategoryPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const routes = {
  home: "/",
  services: "/services",
  aboutUs: "/about-us",
  login: "/login",
  register: "/register",
  searchCategory: "/search/:category",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <TopBarLayout />,
    errorElement: <ErrorPage />,
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
        path: routes.searchCategory,
        element: <SearchCategoryPage />,
      },
    ],
  },
]);
