import { generatePath, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/router";
import styles from "./VerticalCategoryCard.module.scss";

export const VerticalCategoryCard = ({ title, icon, iconColor }) => {
  const params = useParams();
  const navigate = useNavigate();

  const categoryPath = generatePath(routes.searchCategory, { category: title });
  const activeCategory = params.category;

  return (
    <div
      className={`${styles.card} ${
        activeCategory === title ? styles.active : ""
      }`}
      onClick={() => navigate(categoryPath)}
    >
      <div className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
