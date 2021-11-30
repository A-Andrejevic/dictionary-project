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

          {/* {props.results.phonetics.audio.map((audio, index) => {
            return (
              <div key={index}>
                <Pronunciation audio={audio} />
              </div>
            );
          })} */}
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
