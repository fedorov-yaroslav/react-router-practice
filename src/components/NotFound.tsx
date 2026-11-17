import { useNavigate } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Кажется такой страницы не существует</h2>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
      <button onClick={() => navigate(-1)}>
        Вернуться на прошлую страницу
      </button>
    </>
  );
};
