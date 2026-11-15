import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Menu } from "./components/Menu";
import { NotFound } from "./components/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/menu">Меню</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<p>Главная</p>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
