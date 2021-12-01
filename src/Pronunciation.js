import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Pronunciation.css";
export default function Pronunciation(props) {
  return (
    <div className="Pronunciation">
      <a href={props.audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPlayCircle} size="2x" />
      </a>
    </div>
  );
}
