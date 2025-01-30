import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="actived">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#">Cloting</a>
        </li>
        <li>
          <a href="#">Home & Garden</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
