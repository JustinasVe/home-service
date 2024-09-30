import { BusinessCard } from "../BusinessCard/BusinessCard";
import styles from "./BusinessList.module.scss";
import { businesses } from "../../data/businesses";

export const BusinessList = () => {
  return (
    <div className={styles.container}>
      {businesses.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};
