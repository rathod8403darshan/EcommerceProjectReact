import { useSelector } from "react-redux";
import Home from "./Component/Main/Home";
import LoginForm from "./Component/LoginRegister/LoginForm";
import logo from "./logo.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./Component/Main/Product";
import { useCookies } from "react-cookie";
import ErrorPage from "./Component/Main/Errorpage/ErrorPage";
import CartCompo from "./Component/Main/CartCompo";
import Order from "./Component/Main/Order";
import Profile from "./Component/Main/Profile";
import ComplateOrder from "./Component/Main/ComplateOrder";

function App() {

    const state = useSelector(state => state)
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return (
    <>


      <BrowserRouter>
        <Routes>
          {
            cookies.token ? <>
                   <Route path="/" element={<Navigate to="/home"/>} />
                   <Route path="/home" element={<Home/>} />
                   <Route path="/Product" element={<Product/>} />
                   <Route path="/cart" element={<CartCompo/>} />
                   <Route path="/order" element={<Order/>} />
                   <Route path="/profile" element={<Profile/>} />
                   <Route path="/completeorder" element={<ComplateOrder/>} />
            </> :
            <>
            <Route path="/" element={<Navigate to="/Login"/>} />
            <Route path="/Login" element={<LoginForm/>} />
            </>

          }
           <Route path="*" element={<ErrorPage/>} />
           
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
