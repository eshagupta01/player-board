import React, { useState, useEffect } from "react";
import api from "./Api";

function LiveStream({ match, location }) {
  if (location.state === undefined) {
    location.state = { gameID: "" };
  }
  const url = `https://api.twitch.tv/kraken/streams/?game=${match.params.id}`;
  const [streamData, setStreamData] = useState([]);
  const viewers = 0;
  useEffect(() => {
    const fetchData = async () => {
      //const result = await api.get(url);
    };
    fetchData();
  }, []);

  console.log(location);
  return (
    <div>
      <h1 className="text-center">His Live Stream</h1>
      <h3 className="text-center">
        <strong className="text-primary">{viewers}</strong> people currently
        watching him
      </h3>
    </div>
  );
}
export default LiveStream;
