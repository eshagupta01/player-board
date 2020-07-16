import React from "react";
import Games from "./Games";
import Headers from "./Headers";
import Streams from "./Streams";
import GameStreams from "./GameStreams";
import LiveStream from "./LiveStream";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class TwitchWidget extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="twitch-container">
        <Router>
          <Headers />
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={Streams} />
          <Route exact path="/game/:id" component={GameStreams} />
          <Route exact path="/game/:id/channel/:id" component={LiveStream} />
        </Router>
      </div>
    );
  }
}
