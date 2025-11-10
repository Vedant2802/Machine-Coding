import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Tabform from "./Tabform.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Tabform />
  </StrictMode>
);
