import { useParams } from "react-router-dom";

export const SearchCategoryPage = () => {
  const { category } = useParams();

  return (
    <h2>{category}</h2>
  );
};
