import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import { ApiProvider as AppApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./features/baseApi";

export default function App() {
  return (
    <AppApiProvider api={api}>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppApiProvider>
  );
}
