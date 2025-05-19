import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <section>
      <Navbar />

      <section>
        <Outlet />
      </section>
    </section>
  );
};
