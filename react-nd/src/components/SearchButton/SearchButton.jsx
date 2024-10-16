import styles from "./SearchButton.module.scss";
import { CiSearch } from "react-icons/ci";

export const SearchButton = () => {
  return (
    <button className={styles.buttonSearch}>
      <CiSearch fontSize={24} />
    </button>
  );
};
