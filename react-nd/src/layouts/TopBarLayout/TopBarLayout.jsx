import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/TopBar/TopBar";

export const TopBarLayout = () => {
  return (
    <div>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
