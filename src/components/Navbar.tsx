import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/menu">Меню</NavLink>
    </nav>
  );
};
