import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "86btiuz5lua5j1h9myg67f5qh8pamo",
    Accept: "application/vnd.twitchtv.v5+json",
  },
});

export default api;
