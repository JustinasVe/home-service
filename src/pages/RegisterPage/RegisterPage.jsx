import { Link } from "react-router-dom";
import { routes } from "../../router/router";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import styles from "./RegisterPage.module.scss";
import { useState } from "react";

export const RegisterPage = () => {
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [confirmPassword, setConfirmPassword] = useState([""]);

  const handleRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Button type="submit">Register</Button>
        <div className={styles.link}>
          <Link to={routes.login} className={styles.logIn}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};
