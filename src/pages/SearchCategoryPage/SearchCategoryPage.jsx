import { useParams } from "react-router-dom";
import styles from "./SearchCategoryPage.module.scss";
import { VerticalCategoryList } from "../../components/VerticalCategoryList/VerticalCategoryList";

export const SearchCategoryPage = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.categoriesContainer}>
        <VerticalCategoryList />
      </div>
      <div className={styles.businessContainer}>
        <h2 className={styles.title}>{category}</h2>
      </div>
    </div>
  );
};
