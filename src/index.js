import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Rotas from "./router";
import { CartProvider } from "./contexts/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
        <Rotas />
    </CartProvider>
);
