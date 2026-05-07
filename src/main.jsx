import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import FirebaseAuthProvider from "./firebase/FirebaseAuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseAuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </FirebaseAuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
