import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul>
      <li>Эспрессо</li>
      <li>Латте</li>
      <li>Раф</li>
      <li>
        <Link to="/menu/pizza">Пицца</Link>
      </li>
      <li>
        <Link to="/menu/coffee">Кофе</Link>
      </li>
    </ul>
  );
};
