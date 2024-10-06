import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container max-w-6xl mb-32 mx-auto ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
