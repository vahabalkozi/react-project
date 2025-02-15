import "./Categories.css";
export const CategoryItem = ({ name, quantity, onCheckboxChange, checked }) => {
  return (
    <div className="category-item">
      <label>
        <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
        {name} <span>({quantity})</span>
      </label>
    </div>
  );
};
