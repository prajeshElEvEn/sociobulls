import React from "react";
import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./app/index";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
