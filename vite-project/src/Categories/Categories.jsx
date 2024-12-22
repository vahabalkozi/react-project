import "./Categories.css";
import FetchCategories from "../FetchCategories/FetchCategories.jsx";
import { useEffect, useState } from "react";

export const CategoryItem = ({ name, quantity }) => {
  return (
    <div className="category-item">
      <label>
        <input type="checkbox" />
        {name} <span>({quantity})</span>
      </label>
    </div>
  );
};

const CategoryiesList = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      try {
        const data = await FetchCategories();
        setCategory(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    loadCategories();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div className="category-list">
      <div className="category-title">
        <h2>CATEGORIES</h2>
      </div>
      {category?.map((item) => (
        <CategoryItem
          key={item._id}
          name={item.name}
          quantity={item.productCount}
        />
      ))}
    </div>
  );
};

export default CategoryiesList;
