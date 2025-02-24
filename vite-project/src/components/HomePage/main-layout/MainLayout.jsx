import { useState } from "react";
import "./MainLayout.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { CategoryProvider } from "../CategoryContext/CategoryContext.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  const [searchText, setSearchText] = useState("");

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
          <Outlet />
        </div>
      </CategoryProvider>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
