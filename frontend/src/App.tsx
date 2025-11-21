
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Sports from "./pages/Sports";
import Health from "./pages/Health";
import Entertainment from "./pages/Entertainment";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Science from "./pages/Science";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="sports" element={<Sports />} />
            <Route path="health" element={<Health />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="business" element={<Business />} />
            <Route path="technology" element={<Technology />} />
            <Route path="science" element={<Science />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
