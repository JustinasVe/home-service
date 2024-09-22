import styles from "./CategoryCard.module.scss";

export const CategoryCard = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      <div>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};
