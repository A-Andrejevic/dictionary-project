import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [searchQuery, setSearchQuery] = useState(props.defaultSearchQuery);
  let [searchResults, setSearchResults] = useState(null);
  let [pageLoaded, setPageLoaded] = useState(false);

  function handleApiResponse(response) {
    setSearchResults(response.data[0]);
  }

  function searchDictionary() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmittedQuery(event) {
    event.preventDefault();
    searchDictionary();
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function loadPage() {
    setPageLoaded(true);
    searchDictionary();
  }

  if (pageLoaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmittedQuery}>
            <input
              type="search"
              autoFocus="on"
              onChange={handleSearchInputChange}
            />
            <input type="submit" value="Search" id="search-button" />
          </form>
        </section>
        <SearchResult results={searchResults} />
      </div>
    );
  } else {
    loadPage();
    return "Loading dictionary..";
  }
}
