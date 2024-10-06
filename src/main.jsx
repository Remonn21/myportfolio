import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/myportfolio">
      <App />
      <Toaster visibleToasts={1} duration={3000} position="top-right" richColors />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
);
