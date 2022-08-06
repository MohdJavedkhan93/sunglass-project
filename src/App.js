import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Glasses from "./pages/Glasses";
import Shop from "./pages/Shop";
import Clients from "./pages/Clients";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/jquery.mCustomScrollbar.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
