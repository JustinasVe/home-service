import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/router";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import styles from "./RegisterPage.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      register({ email, password });
      navigate(routes.auth.login);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleRegister} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        {error && <p className={styles.error} >{error}</p>}
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
          <Link to={routes.auth.login} className={styles.logIn}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};
