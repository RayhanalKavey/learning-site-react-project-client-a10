import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import Tutorials from "../../Pages/Tutorials/Tutorials";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            {" "}
            <Tutorials></Tutorials>{" "}
          </PrivateRoute>
        ),
      },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
