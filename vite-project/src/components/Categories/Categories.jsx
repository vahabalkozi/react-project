import "./Categories.css";
import FetchCategories from "../../FetchFunction/FetchCategories/FetchCategories.jsx";
import { useEffect, useState } from "react";
import { CategoryItem } from "./CategoryItem.jsx";

const CategoriesList = () => {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [checkedId, setCheckedId] = useState([]);

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

  const handleCheckboxChange = (id) => {
    setCheckedId((prev) => {
      if (prev.includes(id)) {
        return prev.filter((checkedId) => checkedId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    console.log(checkedId);
  }, [checkedId]);

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
          onCheckboxChange={() => handleCheckboxChange(item._id)}
        />
      ))}
    </div>
  );
};
export default CategoriesList;
