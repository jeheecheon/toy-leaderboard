import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./utils/routes";
import { RouterProvider } from "react-router-dom";

import "@/assets/styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
