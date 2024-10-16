import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/TopBar/TopBar";

export const AuthLayout = () => {
  return (
    <div>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
