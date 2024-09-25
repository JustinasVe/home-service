import { Link, useNavigate } from "react-router-dom";
import logoipsum from "../../assets/logoipsum.svg";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src={logoipsum} alt="Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <button onClick={handleLogin} className={styles.loginBtn}>
        Login / Sign Up
      </button>
    </nav>
  );
};
