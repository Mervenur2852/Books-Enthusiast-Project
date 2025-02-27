import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/*  child eleman */}

      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
