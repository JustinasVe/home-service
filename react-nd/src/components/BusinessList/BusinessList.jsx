import { BusinessCard } from "../BusinessCard/BusinessCard";
import styles from "./BusinessList.module.scss";
import { businesses } from "../../data/businesses";

export const BusinessList = ({ category }) => {
  const filteredBusiness = category
    ? businesses.filter(
        (business) => business.category.toLowerCase() === category.toLowerCase()
      )
    : businesses;

  return (
    <div className={styles.container}>
      {filteredBusiness.map((business) => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};
