import "./Footer.css";
export const FooterList = ({ title, first, second, third, fourth, fifth }) => {
  return (
    <div>
      <div className="footer-list">
        <div className="list-title">
          <h3>{title}</h3>
        </div>
        <ul className="list">
          <a href="#">
            <li>{first}</li>
          </a>
          <a href="#">
            <li>{second}</li>
          </a>
          <a href="#">
            <li>{third}</li>
          </a>
          <a href="#">
            <li>{fourth}</li>
          </a>
          <a href="#">
            <li>{fifth}</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
