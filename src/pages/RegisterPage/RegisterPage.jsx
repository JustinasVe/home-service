import { Link } from "react-router-dom";
import { routes } from "../../router/router";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to={routes.login}>Already have an account? Log in</Link>
    </div>
  );
};
