import "../css/Widget.css";
import React, { useEffect, useState } from "react";
import { TRACK_LENGTH_MODIFIDER, convertAudioBufferToBlob } from "./util";

var Sound = require("react-sound").default;
var createBuffer = require("audio-buffer-from");

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

var context: AudioContext;
window.addEventListener("load", init, false);
function init() {
  console.log("Initialize");
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext;
    context = new AudioContext();
  } catch (e) {
    alert("Web Audio API is not supported in this browser");
  }
}

export const TextToSpeechIBMWidget = () => {
  const [audio, setAudio] = useState(new Audio());
  const [isPlayingSong, setPlayingSong] = useState(false);

  const getTextToSpeech = async () => {
    textToSpeech
      .synthesize(synthesizeParams)
      .then((response: { result: any }) => {
        // obtain the audio stream
        return response.result;
      })
      .then((buffer: any) => {
        console.log(buffer);
        const blob = convertAudioBufferToBlob(buffer);
        const newAudioUrl = URL.createObjectURL(blob);
        const newAudio = new Audio(newAudioUrl);
        setAudio(newAudio);
        newAudio.play();
        setPlayingSong(true);
      })
      .catch((err: any) => {
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
