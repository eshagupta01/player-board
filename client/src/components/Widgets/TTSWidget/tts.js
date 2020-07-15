import React, { useState } from "react";
import { main } from "./TTSTools";

function TextToSpeech() {
  const [text, setText] = useState("");
  const handleClick = () => {
    main(text);
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