import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ServicesPage } from "../pages/ServicesPage/ServicesPage";
import { AboutUsPage } from "../pages/AboutUsPage/AboutUsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { TopBarLayout } from "../layouts/TopBarLayout/TopBarLayout";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { SearchCategoryPage } from "../pages/SearchCategoryPage/SearchCategoryPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";

export const routes = {
  home: "/",
  services: "/services",
  aboutUs: "/about-us",
  searchCategory: "/search/:category",
  auth: {
    login: "/login",
    register: "/register",
  },
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
        path: routes.searchCategory,
        element: <SearchCategoryPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.auth.login,
        element: <LoginPage />,
      },
      {
        path: routes.auth.register,
        element: <RegisterPage />,
      },
    ],
  },
]);
