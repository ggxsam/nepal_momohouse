import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./Context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
    <Auth0Provider
    domain="dev-0uiai87fljo8fcla.uk.auth0.com"
    clientId="gG24kWrFCcexb2rzvSh3LsMSBNhfgnH0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </CartProvider>
  </BrowserRouter>
);

