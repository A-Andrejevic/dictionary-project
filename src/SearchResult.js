import React from "react";
import Meanings from "./Meanings";
import Pronunciation from "./Pronunciation";
import "./SearchResult.css";

export default function SearchResult(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="SearchResult">
        <section>
          <h1>{props.results.word}</h1>
          <h6>
            <em>/{props.results.phonetic}/</em>{" "}
          </h6>
          <h5>
            <Pronunciation audio={props.results.phonetics[0].audio} />
          </h5>
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meanings meanings={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
