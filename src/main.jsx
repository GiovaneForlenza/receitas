import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReceitaContextProvider } from "./contexts/ReceitaContext.jsx";
import { PaginaContextProvider } from "./contexts/PaginaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaginaContextProvider>
      <ReceitaContextProvider>
        <App />
      </ReceitaContextProvider>
    </PaginaContextProvider>
  </React.StrictMode>
);
