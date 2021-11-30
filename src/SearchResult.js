import React from "react";
import Meanings from "./Meanings";

export default function SearchResult(props) {
   
  if (props.results) {
    return <div className="SearchResult">
<h1>
    {props.results.word}
</h1>
{props.results.meanings.map((meaning, index) => {
return (
<div key={index}> 
<Meanings meanings={meaning} />
</div>
);
})
}
    </div>;
  } else {
    return (
        <h3>Sorry, we cannot find this word in the dictionary. <br />
        Please try searching for another word.</h3>
    );
  }
}
