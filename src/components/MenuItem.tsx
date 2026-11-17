import { useParams } from "react-router-dom";

export const MenuItem = () => {
  const { id } = useParams();

  return <h2>Детали блюда № {id}</h2>;
};
