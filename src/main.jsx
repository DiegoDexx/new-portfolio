import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./assets/css/tailwind.css"; // Primero Tailwind
import "./assets/css/global.css";





// Inicializa i18n antes de renderizar la app
import "./i118n.js";


import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
