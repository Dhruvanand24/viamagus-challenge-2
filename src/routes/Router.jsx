import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import HomePage from "../pages/HomePage";
import CreatePost from "../pages/CreatePost";
import Description from "../pages/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/CreatePost",
        element: <CreatePost />,
      },
      {
        path: "/Description/:postId",
        element: <Description />,
      },
    ],
  },
]);

export default router;
