import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Pages/Menu";
import Footer from "./Components/Footer/footer";
import { CartsContextProvider } from "./Contex/CartsContex";
import { Carts } from "./Pages/Carts";

function App() {
  return (
    <div className="">
      <CartsContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/carts" element={<Carts />} />
          </Routes>
          <Footer />
        </Router>
      </CartsContextProvider>
    </div>
  );
}

export default App;
