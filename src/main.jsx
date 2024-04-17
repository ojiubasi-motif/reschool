import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GlobalStatesProvider,
} from "./contexts/GlobalStates.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStatesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </GlobalStatesProvider>
  </React.StrictMode>
);
