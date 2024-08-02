import { Layout } from "@src/components/layout";
import { ExplorePage } from "@src/pages/explore";
import { HomePage } from "@src/pages/home";
import { LoginPage } from "@src/pages/login";
import { ProfilePage } from "@src/pages/profile";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "explore",
        element: <ExplorePage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
