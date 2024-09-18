import styles from "./HeroSection.module.scss";
import { CiSearch } from "react-icons/ci";

export const HeroSection = () => {
  return (
    <div className={styles.wrapperHero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <span className={styles.lineBreak}>Near You</span>
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.searchContainer}>
        <input
          className={styles.inputSearch}
          type="search"
          name="search"
          placeholder="Search"
        />
        <button className={styles.buttonSearch}>
          <CiSearch fontSize={24} />
        </button>
      </div>
    </div>
  );
};
