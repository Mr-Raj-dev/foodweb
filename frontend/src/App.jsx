import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Cart from "./components/cart/Cart";
import Profile from "./components/users/Profile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import UpdateProfile from "./components/users/UpdateProfile";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { fetchCartItems } from "./actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  // dispatched exactly once when the component is first rendered, and check if
  // user is authenticated or not

  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  if (user) {
    dispatch(fetchCartItems());
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/users/resetPassword/:token"
              element={<NewPassword />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
