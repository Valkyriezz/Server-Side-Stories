import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/menu-1" element={<ShopCategory category="Menu 1" />} />
          <Route path="/menu-2" element={<ShopCategory category="Menu 2" />} />
          <Route path="/menu-3" element={<ShopCategory category="Menu 3" />} />
          <Route path="/menu-4" element={<ShopCategory category="Menu 4" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
