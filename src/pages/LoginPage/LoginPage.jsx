import { Link } from "react-router-dom";
import { routes } from "../../router/router";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to={routes.register}>Don't have an account? Sign up</Link>
    </div>
  );
};
