import SearchBar from "./SearchBar";
import React from "react";
function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <h1>Weather App</h1>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
export default Nav;
