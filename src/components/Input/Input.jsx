import styles from "./Input.module.scss";
import classNames from "classnames";

export const Input = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
