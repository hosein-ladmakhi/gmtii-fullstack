import { createBrowserRouter } from "react-router-dom";
import { routesPath } from "./path";
import { HomePage, ModifyTaskPage, TaskDetailPage } from "../pages";
import { AppLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: routesPath.Home,
        element: <HomePage />,
        index: true,
      },
      {
        path: routesPath.Task,
        element: <TaskDetailPage />,
      },
      {
        path: routesPath.CreateTask,
        element: <ModifyTaskPage />,
        errorElement: <ModifyTaskPage />,
      },
      {
        path: routesPath.EditTask,
        element: <ModifyTaskPage />,
        errorElement: <ModifyTaskPage />,
      },
    ],
  },
]);
