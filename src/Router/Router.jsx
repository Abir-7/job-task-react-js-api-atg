import { createBrowserRouter } from "react-router-dom";
import UsersPage from "../Pages/UsersPage/UsersPage";
import SingleUsers from "../Pages/SingleUsers/SingleUsers";
import axios from "axios";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage></UsersPage>,
    // children: [
    //   {
    //     path: "/",
    //     element: <SingleUsers></SingleUsers>,
    //     loader: () => "notSelected",
    //   },
    //   {
    //     path: "/user/:id",
    //     element: <SingleUsers></SingleUsers>,
    //     loader: ({params}) =>axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`),
    //   },
    // ],
  },
]);
