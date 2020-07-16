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

// const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

// class LiveStream extends React.Component {
//   componentDidMount() {
//     let embed;
//     const script = document.createElement('script');
//     script.setAttribute(
//       'src',
//       EMBED_URL
//     );
//     script.addEventListener('load', () => {
//       embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
//     });
//     document.body.appendChild(script);
//   }

//   render() {

//     return (
//       <div>
//         Hello {this.props.channel} {this.props.targetID} {this.props.width} {this.props.height}
//         <div id={this.props.targetID}></div>
//       </div>
//     )
//   }
// }

// LiveStream.defaultProps = {
//   targetID: 'twitch-embed',
//   width: '940',
//   height: '480',
//   channel: 'yassuo',
// }

// export default LiveStream;
