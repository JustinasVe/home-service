import { CategoryList } from "../../components/CategoryList/CategoryList";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { TopBar } from "../../components/TopBar/TopBar";

export const HomePage = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <CategoryList />
    </>
  );
};
