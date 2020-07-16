import "../css/Widget.css";
import React, { useEffect, useState } from "react";

const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const apikey = "v9V7IbRttLFzRqM4xkSMUja7VxHSR6VstOu1tA_b3A91";
const apiurl =
  "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/02167163-0352-4a3b-b438-df3108c67fb2";

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  url: apiurl,
});
const synthesizeParams = {
  text: "Hello world",
  accept: "audio/mp3",
  voice: "en-US_AllisonV3Voice",
};

export const TextToSpeechIBMWidget = () => {
  function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
      view[i] = buf[i];
    }
    return ab;
  }

  const getTextToSpeech = async () => {
    textToSpeech
      .synthesize(synthesizeParams)
      .then((response) => {
        // obtain the audio stream
        return response.result;
      })
      .then((buffer) => {
        const arrBuffer = toArrayBuffer(buffer);
        const getAudioContext = () => {
          AudioContext = window.AudioContext || window.webkitAudioContext;
          const audioContent = new AudioContext();
          return audioContent;
        };
        // create audio context
        const audioContext = getAudioContext();
        // create audioBuffer (decode audio file)
        const audioBuffer = audioContext.decodeAudioData(arrBuffer);

        // create audio source
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);

        // play audio
        source.start();
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return (
    <div>
      <button id="loginButton" onClick={getTextToSpeech}>
        TEST
      </button>
      <audio controls id="audio"></audio>
    </div>
  );
};
