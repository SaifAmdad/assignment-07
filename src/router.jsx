import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Status from "./components/Status";
import ErrorPage from "./pages/ErrorPage";
import FriendDetails from "./pages/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/status",
        Component: Status,
      },
      {
        path: "/details/:id",
        Component: FriendDetails,
      },
    ],
  },
  { path: "*", Component: ErrorPage },
]);
