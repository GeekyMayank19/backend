import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import "./index.css";
import rootStore from "./Store/RootStore";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/LogIn";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home/>}>
            <Route path="signup" element={<SignUp />}/>
            <Route path="login" element={<Login/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
