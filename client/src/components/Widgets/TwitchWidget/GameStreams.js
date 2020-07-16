import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./Api";

function GameStreams({ match, location }) {
  if (location.state === undefined) {
    location.state = { gameID: "" };
  }
  const url = `https://api.twitch.tv/kraken/streams/?game=${match.params.id}`;
  const [streamData, setStreamData] = useState([]);
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
      <h1 className="text-center">{match.params.id} Streams</h1>
      <h3 className="text-center">
        <strong className="text-primary">{viewers}</strong> people currently
        watching {match.params.id}
      </h3>
      <div className="row">
        {streamData.map((stream) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img className="card-img-top" src={stream.preview.medium} />
              <div className="card-body">
                <h5 className="card-title"> {stream.channel.display_name} </h5>
                <div className="card-text">{stream.viewers} live viewers</div>
                <button className="btn btn-success">
                  <Link
                    className="link"
                    to={{
                      pathname:
                        "/game/" +
                        match.params.id +
                        "/channel/" +
                        stream.channel.display_name,
                      state: {
                        gameID: match.params.id,
                        channelName: stream.channel.display_name,
                        viewers: stream.viewers,
                      },
                    }}
                  >
                    {stream.channel.display_name} streams{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GameStreams;
