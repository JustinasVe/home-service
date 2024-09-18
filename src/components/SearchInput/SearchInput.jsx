import styles from "./SearchInput.module.scss";

export const SearchInput = () => {
  return (
    <input
      className={styles.inputSearch}
      type="search"
      name="search"
      placeholder="Search"
    />
  );
};
