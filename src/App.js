import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/Login";
import SignUpForm from "./components/Signup";
import CartItem from "./components/Cart";
import Store from "./store/Store";
import Fav from "./components/Fav";
import Navbar from "./components/Navbar";
import ProductDetails from "./product/Index";
import Product from "./components/Product";

function App() {
  return (
<Provider store={Store}>
  <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={
  <>
    <Product />
    <Dashboard />
  </>
} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
</Provider>
 );
}

export default App;
