import { createBrowserRouter } from "react-router-dom";
import UsersPage from "../Pages/UsersPage/UsersPage";
import NotfoundPage from "../Pages/NotFoundPage/NotfoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage></UsersPage>,

  },{
    path:'*',
    element:<NotfoundPage></NotfoundPage>
  }
]);
