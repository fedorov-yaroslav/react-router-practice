import { Link } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <h2>Кажется такой страницы не существует</h2>
      <div className="wrapper">
        <Link to="/">На главную→</Link>
      </div>
    </>
  );
};
