import "./Brand.css";
export const Brand = ({ name, quantity, id, conect }) => {
  return (
    <div className="brand-item">
      <label htmlFor={conect}>
        <input type="checkbox" id={id} />
        {name} <span>({quantity})</span>
      </label>
    </div>
  );
};
