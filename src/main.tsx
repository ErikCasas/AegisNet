import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
