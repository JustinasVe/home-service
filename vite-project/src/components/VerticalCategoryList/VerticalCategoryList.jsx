import { SiCcleaner } from "react-icons/si";
import { FaTools, FaPaintRoller } from "react-icons/fa";
import { FaTruckFast, FaFaucetDrip } from "react-icons/fa6";
import { BsFillLightningFill } from "react-icons/bs";
import styles from "./VerticalCategoryList.module.scss";
import { VerticalCategoryCard } from "../VerticalCategoryCard/VerticalCategoryCard";

const categories = [
  {
    id: 1,
    icon: <SiCcleaner />,
    title: "Cleaning",
    color: "#b12fde",
  },
  {
    id: 2,
    icon: <FaTools />,
    title: "Repair",
    color: "#ecbb3a",
  },
  {
    id: 3,
    icon: <FaPaintRoller />,
    title: "Painting",
    color: "#059e96",
  },
  {
    id: 4,
    icon: <FaTruckFast />,
    title: "Shifting",
    color: "#e23e40",
  },
  {
    id: 5,
    icon: <FaFaucetDrip />,
    title: "Plumbing",
    color: "#ea9319",
  },
  {
    id: 6,
    icon: <BsFillLightningFill />,
    title: "Electric",
    color: "#1f71c5",
  },
];

export const VerticalCategoryList = () => {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <VerticalCategoryCard
          key={category.id}
          icon={category.icon}
          title={category.title}
          iconColor={category.color}
        />
      ))}
    </div>
  );
};
