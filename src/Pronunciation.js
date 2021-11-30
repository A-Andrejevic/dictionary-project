import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Pronunciation(props) {
  props.audio = "https:" + props.audio;
  return (
    <button>
      <FontAwesomeIcon icon={faPlayCircle} />
      <a href={props.audio}>Listen</a>
    </button>
  );
}
