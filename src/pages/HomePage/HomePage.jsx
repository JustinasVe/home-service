import { BusinessList } from "../../components/BusinessList/BusinessList";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategoryList />
      <h2 className={styles.title}>Popular businesses</h2>
      <BusinessList />
    </>
  );
};
