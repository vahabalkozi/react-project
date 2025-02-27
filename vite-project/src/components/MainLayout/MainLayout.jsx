import "./MainLayout.css";
import Header from "../HomePage/Header/Header.jsx";
import Footer from "../HomePage/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
