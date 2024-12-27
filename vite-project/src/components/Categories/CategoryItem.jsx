import "./Categories.css";
export const CategoryItem = ({ name, quantity, onCheckboxChange }) => {
  return (
    <div className="category-item">
      <label>
        <input type="checkbox" onChange={onCheckboxChange} />
        {name} <span>({quantity})</span>
      </label>
    </div>
  );
};
