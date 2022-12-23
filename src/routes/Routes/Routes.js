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
import TutorialDetails from "../../Pages/Tutorials/TutorialDetails";
import Checkout from "../../Checkout/Checkout";
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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
        loader: () => fetch(`${process.env.REACT_APP_URL_Server}/tutorials`),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/tutorial-details/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_URL_Server}/tutorials/${params.id}`),

        element: <TutorialDetails></TutorialDetails>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_URL_Server}/tutorials/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
