import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchQuery, setSearchQuery] = useState(null);

  function searchDictionary(event) {
    event.preventDefault();
    alert(`Searching for ${searchQuery}`);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchDictionary}>
        <input type="search" autoFocus="on" onChange={handleSearchInputChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
