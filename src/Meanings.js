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
              Definition: {definition.definition}
              <br />
              Example:<em> {definition.example} </em>
              <Synonyms synonyms={definition.synonyms} />
       <br/>
          </div>
        );
      })}
    </div>
  );
}
