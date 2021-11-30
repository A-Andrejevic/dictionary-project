import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchQuery, setSearchQuery] = useState(null);
  let [searchResults, setSearchResults] = useState(null);

  function handleApiResponse(response) {
    setSearchResults(response.data[0]);
  }

  function searchDictionary(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={searchDictionary}>
          <input
            type="search"
            autoFocus="on"
            onChange={handleSearchInputChange}
          />
          <input type="submit" value="Search" />
        </form>
      </section>
      <SearchResult results={searchResults} />
    </div>
  );
}
