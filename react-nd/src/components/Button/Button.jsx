import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
     {children}
    </button>
  );
};
