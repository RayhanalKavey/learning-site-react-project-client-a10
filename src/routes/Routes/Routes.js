import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/FAQ/Faq";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import Tutorials from "../../Pages/Tutorials/Tutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Tutorials></Tutorials> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
