import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    console.log(`new search: ${search}`);
    props.searchBarParent(search);
  }

  return (
    <form onSubmit={handleSearch} className='form-grid'>
      <input
        type="text"
        name="search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type="submit"
        className="search-button "
        style={{ margin: "1em" }}
      >
        Enter
      </button>
    </form>
  );
};

export default SearchBar;
