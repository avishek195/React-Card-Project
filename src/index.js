import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import "./index.scss";
import App from "./App.js";
import { ProductsContextProvider } from "./contexts/products.context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
