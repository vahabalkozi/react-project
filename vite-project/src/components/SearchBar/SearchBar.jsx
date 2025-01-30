import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };
  return (
    <div>
      <form action="" onSubmit={handleSearch} className="search-bar">
        <div className="select-option">
          <select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Cloting</option>
            <option>Home & Garden</option>
            <option>Books</option>
            <option>Sports</option>
          </select>
        </div>
        <input
          type="serch"
          placeholder="Search here"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
