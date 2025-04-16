import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import Network from "./pages/networks";
import Admin from "./pages/admin";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: <Network />,
  },
]);

export { router };
