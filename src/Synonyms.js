import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        Related words:{" "}
        {props.synonyms.map((synonym, index) => {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
