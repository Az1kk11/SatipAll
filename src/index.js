import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


import { ToastContainer } from 'react-toastify';

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <ToastContainer
          theme="dark"
          position="top-center"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
