import "../css/Widget.css";

import { ItemTypes, WidgetTypes } from "../../types";
import React, { useEffect, useState } from "react";

import { CelebrityWidget } from "./CelebrityWidget";
import { TwitchWidget } from "./TwitchWidget/TwitchWidget";
import { JokeWidget } from "./JokeWidget";
import LeaderboardWidget from "./LeaderboardWidget/LeaderboardWidget";
import { useDrag } from "react-dnd";
import { BalancesWidget } from "./BalancesWidget";
import { BearFaucetWidget } from "./BearFaucetWidget";
import { TransferWidget } from "./TransferWidget";
//import { AudioPlayerWidget } from "./AudioPlayerWidget";

export interface IWidgetProps {
  type: WidgetTypes;
  top: number;
  left: number;
  id: string;
}

export const Widget = (props: IWidgetProps) => {
  const { top, left, id, type } = props;

  const [, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WIDGET },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="widget-container"
      style={{
        left,
        top,
      }}
    >
      {renderWidget(type)}
    </div>
  );
};

const renderWidget = (type: WidgetTypes) => {
  switch (type) {
    case WidgetTypes.time:
      return <WidgetTime />;
    case WidgetTypes.joke:
      return <JokeWidget />;
    case WidgetTypes.leaderboard:
      return <LeaderboardWidget />;
    case WidgetTypes.celebrity:
      return <CelebrityWidget />;
    case WidgetTypes.twitch:
      return <TwitchWidget />;
    case WidgetTypes.balances:
      return <BalancesWidget />;
    case WidgetTypes.bear_faucet:
      return <BearFaucetWidget />;
    case WidgetTypes.bear_transfer:
      return <TransferWidget />;
    /*case WidgetTypes.audio_player:
      return <AudioPlayerWidget />*/
    // add widget case here for new widget types
    default:
      return null;
  }
};

// example widget

const WidgetTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const newTime = getFormattedTime();
      setTime(newTime);
    }, 100);
  }, []);

  return (
    <div>
      The time is <div>{time}</div>
    </div>
  );
};

const getFormattedTime = (): string => {
  const newDate = new Date(Date.now());

  return `${newDate.getHours()}:${newDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${newDate
    .getSeconds()

    .toString()
    .padStart(2, "0")}:${newDate
    .getMilliseconds()

    .toString()
    .padStart(2, "0")}`;
};
