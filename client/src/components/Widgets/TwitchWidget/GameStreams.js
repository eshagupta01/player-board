import React, { useState, useEffect } from "react";
import api from "./Api";

function GameStreams({ match, location }) {
  if (location.state == undefined) {
    location.state = { gameID: "" };
  }
  const url = `https://api.twitch.tv/kraken/streams/?game=${match.params.id}`;
  const [steamData, setStreamData] = useState([]);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url);
      console.log(result.data.streams);

      let totalViewers = result.data.streams.reduce((acc, val) => {
        return acc + val.viewers;
      }, 0);

      setStreamData(result.data.streams);
      setViewers(totalViewers);
    };
    fetchData();
  }, []);

  console.log(location);
  return (
    <div>
      <li>{viewers}</li>
      <li>{location.state.gameID}</li>
    </div>
  );
}
export default GameStreams;
