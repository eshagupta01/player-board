import React, { useState } from "react";
import { microsoft } from "./TTSTools";

function TextToSpeech() {
  const [text, setText] = useState("");
  const handleClick = () => {
    microsoft(text);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />

      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default TextToSpeech;
