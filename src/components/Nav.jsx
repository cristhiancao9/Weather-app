import SearchBar from "./SearchBar";
import React from "react";
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <h1>Weather App</h1>
      </div>
      <SearchBar />
    </nav>
  );
}
export default Nav;
