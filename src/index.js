// Third party imports.
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Local imports.
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
