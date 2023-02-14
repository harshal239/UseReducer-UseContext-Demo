import "./styles.css";
import { Navbar, ProductCard } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h2>UseReducer and UseContext Demo</h2>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
