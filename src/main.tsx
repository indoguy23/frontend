import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import Tooltip from "@/components/ui/Tooltip";
import "@/index.css";
import { ToastProvider } from "./components/ui/Toast";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <Tooltip.Provider>
        <BrowserRouter>
          <App />
           <ToastProvider />
        </BrowserRouter>
      </Tooltip.Provider>
    </ThemeProvider>
  </StrictMode>,
);
