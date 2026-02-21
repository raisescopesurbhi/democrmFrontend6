import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/ReduxStore";
import { PersistGate } from "redux-persist/integration/react";
import UserPanelConfig from "./utils/UserPanelConfig";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <UserPanelConfig />
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);






//Update 