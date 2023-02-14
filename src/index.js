import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ShopProvider>
      <Router>
        <App />
      </Router>
    </ShopProvider>
  </StrictMode>
);
