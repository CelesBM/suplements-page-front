import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Code from "../pages/Code/Code";
import ShippingDetails from "../pages/ShippingDetails/ShippingDetails";
import Success from "../pages/Success/Success";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Verify" element={<Code />} />
        <Route path="/ShippingDetails" element={<ShippingDetails />} />
        <Route path="/Success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
