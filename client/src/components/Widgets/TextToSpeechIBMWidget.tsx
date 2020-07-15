import "../css/Widget.css";
import React, { useEffect, useState } from "react";
import { TRACK_LENGTH_MODIFIDER, convertAudioBufferToBlob } from "./util";

var Sound = require("react-sound").default;
var createBuffer = require("audio-buffer-from");
const play = require("audio-play");

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

  function toArrayBuffer(buf: Buffer) {
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
      .then((response: { result: any }) => {
        // obtain the audio stream
        return response.result;
      })
      .then((buffer: any) => {
        //play audio buffer with possible options
        const arrBuffer = toArrayBuffer(buffer);
        var audioCtx = new window.AudioContext();
        var source = audioCtx.createBufferSource();
        audioCtx.decodeAudioData(
          arrBuffer,
          function (buffer) {
            source.buffer = buffer;
            source.connect(audioCtx.destination);
            source.loop = true;
            source.start(0);
          },
          function (e) {
            console.log("Error with decoding audio data" + e);
          }
        );
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
