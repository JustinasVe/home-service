import { SearchButton } from "../SearchButton/SearchButton.jsx";
import { SearchInput } from "../SearchInput/SearchInput.jsx";
import styles from "./HeroSection.module.scss";

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
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  );
};
