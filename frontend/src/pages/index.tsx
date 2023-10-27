import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const TaskDetailPage = lazy(() => import("./TaskDetailPage"));
const ModifyTaskPage = lazy(() => import("./UpsertTaskPage"));

export { HomePage, TaskDetailPage, ModifyTaskPage };
