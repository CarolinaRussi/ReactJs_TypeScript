import { router } from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import CartProvider from "./contexts/CartContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position="bottom-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
