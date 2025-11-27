import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import Footer from "./Components/Footer/footer";
import { CartsContextProvider } from "./Contex/CartsContex";
import { Carts } from "./Pages/Carts";
import { ScrollToTop } from "./Components/Scroll/ScrollToTop";


function App() {
  return (
    <div className="">
      <CartsContextProvider>
        <Router>
          <ScrollToTop />
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
