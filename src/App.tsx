import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { MenuItem } from "./components/MenuItem";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/menu/:id" element={<MenuItem />} />
      </Routes>
    </BrowserRouter>
  );
}
