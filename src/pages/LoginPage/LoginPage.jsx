import { Link } from "react-router-dom";
import { routes } from "../../router/router";
import styles from "./LoginPage.module.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
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
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <Link to={routes.register} className={styles.signUp}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};
