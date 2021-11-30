import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Pronunciation.css";
export default function Pronunciation(props) {
  return (
    <button type="button" class="btn btn-dark">
      <FontAwesomeIcon icon={faPlayCircle} size="2x" />
      <a href={props.audio}>Listen</a>
    </button>
  );
}
