import { useState } from "react";
import "./MainLayout.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { CategoryProvider } from "../CategoryContext/CategoryContext.jsx";
import Home from "../Home/Home.jsx";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <div>
      <CategoryProvider>
        <div className="header">
          <Header onSearch={handleSearch} />
        </div>
        <div className="main">
          {location.pathname === "/" ? (
            <Home queryText={searchText} />
          ) : (
            <Outlet />
          )}
        </div>
      </CategoryProvider>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
