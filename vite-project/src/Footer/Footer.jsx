import './Footer.css';

export const FooterLists = ({title,first,second,third,fourth,fifth})=>{
    return(
        <div>
            <div className="footer-list">
                <div className="list-title">
                    <h3>{title}</h3>
                </div>
                <ul className='list'>
                    <li>{first}</li>
                    <li>{second}</li>
                    <li>{third}</li>
                    <li>{fourth}</li>
                    <li>{fifth}</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = ()=>{
    return(
        <div className="footer-bar">
             <FooterLists
             title="ABOUT US"
             first="Lorem ipsum dolor"
             second="1734 stonecoal road"
             third="+021-95-51-84"
             fourth="email@email.com"
            />
            <FooterLists
            title="CATEGORIES"
            first="Hot deals"
            second="Laptops"
            third="Smartphones"
            fourth="Cameras"
            fifth="Accessories"
            />
            <FooterLists
             title="INFORMATION"
             first="About Us"
             second="Contact Us"
             third="Privacy Policy"
             fourth="Orders and Returens"
             fifth="Terms and Condition"
            />
            <FooterLists
             title="CATEGORIES"
             first="Hot deals"
             second="Laptops"
             third="Smartphones"
             fourth="Cameras"
             fifth="Accessories"
            />
            <FooterLists
             title="SERVICE"
             first="My Account"
             second="View Cart"
             third="Wishlist"
             fourth="TrackMyOrder"
             fifth="Help"
            />
        </div>
    )
}
export default Footer;