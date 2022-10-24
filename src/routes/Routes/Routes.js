import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Tutorials from "../../Pages/Tutorials/Tutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Tutorials></Tutorials> }],
  },
]);
