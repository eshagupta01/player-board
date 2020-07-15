import React from "react";
import Games from "./Games";
import Headers from "./Headers";
import Streams from "./Streams";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class TwitchWidget extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Headers />
        <Route exact path="/" component={Games} />
        <Route exact path="/top-streams" component={Streams} />
      </Router>
    );
  }
}
