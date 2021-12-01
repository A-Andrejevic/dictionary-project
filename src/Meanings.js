import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meanings.partOfSpeech}</h2>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div key={index}>
            {" "}
            <b>Definition:</b> {definition.definition}
            <br />
            {definition.example && definition.example.length > 0 && (
              <>
                <em> Example: {definition.example} </em>{" "}
              </>
            )}
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
