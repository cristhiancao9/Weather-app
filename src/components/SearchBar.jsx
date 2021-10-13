import React, { useState } from "react";
import "./SearchBar.css";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="search"
        type="text"
        value={city}
        placeholder="Add City..."
        onChange={(e) => setCity(e.target.value)}
      />

      <input className="add" type="submit" value="+" />
    </form>
  );
}
