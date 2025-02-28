import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffe from "./components/AddCoffe";
import UpdateCoffe from "./components/UpdateCoffe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:()=> fetch('http://localhost:5000/coffe')
  },
  {
    path: "addcoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "updatecoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffe/${params.id}`)
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
