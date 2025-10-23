import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/header.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    
  </StrictMode>
);
