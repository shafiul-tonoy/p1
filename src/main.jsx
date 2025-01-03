import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import P1 from "../src/components/p1";  
import P2 from "../src/components/p2";  
import P3 from "../src/components/p3";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project-1",
    element: <P1 />,
  },
  {
    path: "/project-2",
    element: <P2 />,
  },
  {
    path: "/project-3",
    element: <P3 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
