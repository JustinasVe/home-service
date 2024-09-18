import logoipsum from "../../assets/logoipsum.svg";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src={logoipsum} alt="Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
      <button className={styles.loginBtn}>Login / Sign Up</button>
    </nav>
  );
};
