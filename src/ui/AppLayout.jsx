import { Outlet, useLocation, useParams } from "react-router";
import Header from "./Header";

function AppLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Header type="primary" />
      ) : (
        <Header type="secondary" />
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
