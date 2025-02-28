import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import DataEntry from "./DataEntry/DataEntry";
import ContactUs from "./ContactUs/ContactUs";
import Dashboard from "./Dashboard/Dashboard";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Checkout from "./Checkout/Checkout";
import PaymentGateway from "./PaymentGateway/PaymentGateway";
import CartContext from "./CartContext/CartContext";
import ProductCard from "./ProductCard/ProductCard";
import Shop from "./Shop/Shop";
import ProductDetail from "./ProductDetails/ProductDetail";
import Cart from "./Cart/Cart";
import Electronics from "./Electronics/Electronics";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navBar" element={<NavBar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentgateway" element={<PaymentGateway />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="cartcontext" element={<CartContext />} />
            <Route path="/shop" element={<Shop />} />{" "}
            {/* Corrected this line */}
            <Route path="/product/:id" element={<ProductDetail />} />{" "}
            {/* Corrected this line */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/sidebar" element={<Sidebar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
