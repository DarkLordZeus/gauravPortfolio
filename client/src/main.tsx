import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(<App />);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/muskaanPortfolio">
    <App />
  </BrowserRouter>
);
