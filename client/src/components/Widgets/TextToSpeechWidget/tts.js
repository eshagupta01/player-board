import React, { useState } from "react";
import { microsoft } from "./TTSTools";
import { mozilla } from "./TTSTools";
import WaveForm from "../../../assets/waveform.png";
import { VolumeUp, CloudDownload, Share } from "@material-ui/icons";

function TextToSpeech() {
  const [text, setText] = useState("");
  const [api, setApi] = useState(0);

  const api_list = [microsoft, mozilla]; // Add your imported function to the list

  const handleClick = () => {
    api_list[api](text);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSelect = (event) => {
    setApi(event.target.value);
  };
  return (
    <div style={{ padding: "50px" }}>
      <div style={{ display: "block", textAlign: "center" }}>
        <img width="100" src={WaveForm} alt="WaveForm" />
      </div>

      <div style={{ display: "block", textAlign: "center" }}>
        <select
          name="apis"
          id="apis"
          style={{ width: "60%" }}
          onChange={handleSelect}
        >
          <option>Select API</option>
          {/* Add an option to the dropdown with the value incremented including your technology */}
          <option value={0}>microsoft</option>
          <option value={1}>mozilla</option>
        </select>
      </div>

      <div
        style={{
          display: "block",

          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <input onChange={handleChange} />
      </div>
      <div
        style={{
          display: "block",

          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            float: "left",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <VolumeUp
            style={{
              fontSize: "40",

              color: "2F9C95",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              display: "block",
            }}
          >
            Click to Play
          </span>
        </div>

        <div
          style={{
            marginLeft: "20px",
            float: "left",
            cursor: "pointer",
          }}
          onClick={null}
        >
          <CloudDownload
            style={{
              fontSize: "40",

              color: "2F9C95",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              display: "block",
            }}
          >
            Download
          </span>
        </div>

        <div
          style={{
            marginLeft: "20px",
            float: "left",
            cursor: "pointer",
          }}
          onClick={null}
        >
          <Share
            style={{
              fontSize: "40",
              color: "2F9C95",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              display: "block",
            }}
          >
            Share
          </span>
        </div>
        {/* <button onClick={handleClick}>Play</button> */}
      </div>
    </div>
  );
}

export default TextToSpeech;
