import React, { useState } from "react";
const readFileSync = require("fs").readFileSync;
const sdk = require("microsoft-cognitiveservices-speech-sdk");

const speechConfig = sdk.SpeechConfig.fromSubscription(
  "6fe10de8d0ca4bd894e02d8c2a2debb2",
  "westus"
);
const audioConfig = sdk.AudioConfig.fromSpeakerOutput();
const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

function ad(text) {
  synthesizer.speakTextAsync(
    text,
    (result) => {
      if (result) {
        console.log(JSON.stringify(result));
      }
      synthesizer.close();
    },
    (error) => {
      console.log(error);
      synthesizer.close();
    }
  );
}

function TextToSpeech() {
  const [text, setText] = useState("");
  const handleClick = () => {
    ad(text);
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
