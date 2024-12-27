import "./Brand.css";
import { Brand } from "./Brand";

const Brands = () => {
  return (
    <div className="brand-list">
      <div className="brand-title">
        <h2>BRANDS</h2>
      </div>
      <Brand id="samsung" conect="samsung" name="SAMSUNG" quantity="578" />
      <Brand id="lg" conect="lg" name="LG" quantity="125" />
      <Brand id="sony" conect="sony" name="SONY" quantity="755" />
      <Brand id="hp" conect="hp" name="HP" quantity="575" />
      <Brand id="del" conect="del" name="DEL" quantity="130" />
      <Brand id="honor" conect="honor" name="HONOR" quantity="75" />
    </div>
  );
};
export default Brands;
