import React, { useState, useEffect } from "react";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";
import api from "./Api";

function LiveStream({ match, location }) {
  if (location.state === undefined) {
    location.state = { gameID: "", channelName: "" };
  }
  const url = `https://api.twitch.tv/kraken/streams/?game=${match.params.id}`;
  const [streamData, setStreamData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      //const result = await api.get(url);
    };
    fetchData();
  }, []);

  console.log(location);
  return (
    <div>
      <h1 className="text-center">{location.state.channelName} Live Stream</h1>
      <h3 className="text-center">
        <strong className="text-primary">{location.state.viewers}</strong>{" "}
        people currently watching {location.state.channelName}
      </h3>
      <div>
        <TwitchEmbed
          channel={location.state.channelName}
          theme="dark"
          onVideoPause={() => console.log(":(")}
        />
      </div>
    </div>
  );
}
export default LiveStream;
