import styles from "./SearchInput.module.scss";
import { useState } from "react";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      className={styles.inputSearch}
      type="search"
      name="search"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};
