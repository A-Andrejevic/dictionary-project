import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meanings.partOfSpeech}</h2>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p> {definition.definition} </p>
            <em> {definition.example} </em>
          </div>
        );
      })}
    </div>
  );
}
