import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "./Api";
function Games() {
  const url = "https://api.twitch.tv/kraken/games/top";
  const [games, setGames] = useState([]);

  // make sure the function only run once
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url);
      console.log(result.data.top[0]);
      setGames(result.data.top);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Most Popular Games</h1>
      <div className="row">
        {games.map((game) => (
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={game.game.box.medium} />
              <div className="card-body">
                <h5 className="card-title"> {game.game.name} </h5>
                <button className="btn btn-success">
                  <Link
                    className="link"
                    to={{
                      pathname: "game/" + game.game.name,
                      state: {
                        gameID: game.game._id,
                      },
                    }}
                  >
                    {game.game.name} streams{" "}
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
export default Games;
