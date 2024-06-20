import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout, { RequireAuth } from "./layout/Layout";
import Singlepage from "./pages/singlePage/Singlepage";
import Loginpage from "./pages/loginPage/Loginpage";
import Profilepage from "./pages/profilePage/Profilepage";
import Register from "./pages/register/Register";
import Newpost from "./pages/newPostPage/Newpost";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import { listPageLoader, singlePageLoader,profilePageLoader } from "./lib/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <ListPage />,
        loader: listPageLoader,
      },
      {
        path: "/:id",
        element: <Singlepage />,
        loader: singlePageLoader,
      },
      {
        path: "/login",
        element: <Loginpage />, 
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/profile",
        element: <Profilepage />,
        loader: profilePageLoader
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage />,

      },
      {
        path: "/newpost",
        element: <Newpost />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
