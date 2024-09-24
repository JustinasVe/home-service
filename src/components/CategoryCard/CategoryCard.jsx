import styles from "./CategoryCard.module.scss";

export const CategoryCard = ({ icon, title, iconColor }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon} style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};
