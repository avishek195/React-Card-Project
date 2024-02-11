import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import "./index.scss";
import App from "./App.js";
import { ProductsContextProvider } from "./contexts/products.context.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
