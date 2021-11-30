import React from "react";
import Meanings from "./Meanings";
import "./SearchResult.css";

export default function SearchResult(props) {



  if (props.results) {
    return (
      <div className="SearchResult">
        <h1>{props.results.word}</h1>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
