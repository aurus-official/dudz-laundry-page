// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
