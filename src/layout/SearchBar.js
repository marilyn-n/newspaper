import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleValueChange = (e) => setValue(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${value}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="search"
          value={value}
          onChange={handleValueChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;