import "./App.css";
import RegisterForm from "./Componet/RegisterForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./Componet/LoginForm";
import Dashboard from "./Componet/Dashboard ";
import Home from "./Componet/Home";
import Product from "./Componet/Product";
import { useState } from "react";
import Testcard from "./Componet/Testcard";

function App() {
  const [islogin, setislogin] = useState(
    JSON.parse(localStorage.getItem("islogin"))
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!islogin ? (
            <>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route
                path="/login"
                element={<LoginForm setislogin={setislogin} />}
              />
              <Route
                path="/registration"
                element={<RegisterForm setislogin={setislogin} />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/Product" element={<Product />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      {/* <Testcard/> */}
    </>
  );
}

export default App;
