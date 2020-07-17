const readFileSync = require("fs").readFileSync;
const sdk = require("microsoft-cognitiveservices-speech-sdk");

const speechConfig = sdk.SpeechConfig.fromSubscription(
  "6fe10de8d0ca4bd894e02d8c2a2debb2",
  "westus"
);
const audioConfig = sdk.AudioConfig.fromSpeakerOutput();
const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

export function microsoft(text) {
  synthesizer.speakTextAsync(
    text,
    (result) => {
      if (result) {
      }
    },
    (error) => {
      console.log(error);
      synthesizer.close();
    }
  );
}

export function mozilla(text) {
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(text);
  utterThis.onerror = function (event) {
    console.log(
      "An error has occurred with the mozilla speech synthesis: " + event.error
    );
  };
  synth.speak(utterThis);
}
