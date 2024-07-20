import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
