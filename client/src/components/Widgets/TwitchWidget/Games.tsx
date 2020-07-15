import React, { useState, useEffect } from "react";
import api from "./Api";
function Games() {
  const url = "https://api.twitch.tv/kraken/games/top";
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url);
      console.log(result);
    };
    fetchData();
  });
  return (
    <div>
      <h1>Most Popular Games</h1>
    </div>
  );
}
export default Games;
