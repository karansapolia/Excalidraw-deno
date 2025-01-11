import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExcalidrawApp from "./App";

globalThis.__EXCALIDRAW_SHA__ = import.meta.env.VITE_APP_GIT_SHA;

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("root element not found");
}
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ExcalidrawApp />
  </StrictMode>,
);
