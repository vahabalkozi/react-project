import { useEffect, useState } from "react";
import "./SearchBar.css";
import FetchCategories from "../../FetchFunction/FetchCategories/FetchCategories.jsx";
import { useCategoryContext } from "../CategoryContext/CategoryContext.jsx";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(undefined);
  const { checkedId, handleCheckboxChange } = useCategoryContext();

  const handleCategories = async () => {
    try {
      const data = await FetchCategories();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div>
      <form action="" onSubmit={handleSearch} className="search-bar">
        <div className="select-option">
          <select
            value={checkedId || "All Categories"}
            onChange={(e) => {
              const selectedValue = e.target.value;
              handleCheckboxChange(
                selectedValue === "All Categories" ? null : selectedValue
              );
            }}
          >
            <option>All Categories</option>
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="search"
          placeholder="Search here"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.trim());
          }}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
