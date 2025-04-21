import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App.tsx";
import { register } from "swiper/element/bundle";
import "./index.css";

import { Toaster } from "react-hot-toast";

register();
import "swiper/swiper-bundle.css";

import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
