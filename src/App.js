import { useEffect, useState } from "react";
import './index.css';
import axios from "axios";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Pages/Menu";
import Footer from "./Components/Footer/footer";

function App() {

  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
