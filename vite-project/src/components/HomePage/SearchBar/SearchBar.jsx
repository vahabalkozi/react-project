import { useContext, useEffect, useState } from "react";
import "./SearchBar.css";
import FetchCategories from "../../../api/categories/categories.js";
import { useCategoryContext } from "../../../Contexts/CategoryContext/CategoryContext.jsx";
import { SearchContext } from "../../../Contexts/SearchContext/SearchContext.jsx";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(undefined);
  const { checkedId, handleCheckboxChange } = useCategoryContext();
  const { updateSearchQuery } = useContext(SearchContext);

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const data = await FetchCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    handleCategories();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    updateSearchQuery(searchText, event);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    handleCheckboxChange(
      selectedValue === "All Categories" ? null : selectedValue
    );
  };
  return (
    <div>
      <form action="" onSubmit={handleSearch} className="search-bar">
        <div className="select-option">
          <select
            value={checkedId || "All Categories"}
            onChange={handleCategoryChange}
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
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
