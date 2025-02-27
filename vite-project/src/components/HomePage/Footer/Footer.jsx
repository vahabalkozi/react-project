import "./Footer.css";
import { FooterList } from "./FooterList.jsx";

const Footer = () => {
  return (
    <div className="footer-bar">
      <FooterList
        title="ABOUT US"
        first="Lorem ipsum dolor"
        second="1734 stonecoal road"
        third="+021-95-51-84"
        fourth="email@email.com"
      />
      <FooterList
        title="CATEGORIES"
        first="Hot deals"
        second="Laptops"
        third="Smartphones"
        fourth="Cameras"
        fifth="Accessories"
      />
      <FooterList
        title="INFORMATION"
        first="About Us"
        second="Contact Us"
        third="Privacy Policy"
        fourth="Orders and Returens"
        fifth="Terms and Condition"
      />
      <FooterList
        title="CATEGORIES"
        first="Hot deals"
        second="Laptops"
        third="Smartphones"
        fourth="Cameras"
        fifth="Accessories"
      />
      <FooterList
        title="SERVICE"
        first="My Account"
        second="View Cart"
        third="Wishlist"
        fourth="TrackMyOrder"
        fifth="Help"
      />
    </div>
  );
};
export default Footer;
