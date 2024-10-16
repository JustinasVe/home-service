import styles from "./BusinessCard.module.scss";

export const BusinessCard = ({ business }) => {
  return (
    <div className={styles.businessCard}>
      <img
        src={business.images[0].url}
        alt={business.name}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <button className={styles.businessCardBtn}>Book now</button>
      </div>
    </div>
  );
};
