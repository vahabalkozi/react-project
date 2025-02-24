import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import CartIcon from "../CartIcon/CartIcon.jsx";
import { Link } from "react-router-dom";
const Header = ({ onSearch }) => {
  return (
    <div>
      <div className="top-bar">
        <div className="header-container">
          <div className="top-bar-info">
            <p className="contact-info">
              <i className="fa fa-phone"></i>+021-95-51-84
              <i className="fa fa-envelope"></i>email@gmail.com
              <i className="fas fa-map-marker-alt"></i> 1734 Stonecoal Road
            </p>
            <p className="currency-account">
              <span>
                <span className="colored">$</span> USD
              </span>{" "}
              <a href="#">
                <i className="fas fa-user-alt"></i>My Account
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="header-container">
          <div className="main-header-info">
            <div className="logo">
              <Link to="/">
                <p>
                  Electro <i className=" 	fa fa-circle"></i>
                </p>
              </Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <CartIcon />
          </div>
        </div>
      </div>
      <div className="navigation-bar">
        <div className="header-container">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
