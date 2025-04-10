import React from 'react';

import { ScoreEvent, ScoreNotifier } from './InputScores/ScoreNotifier';
import "./styles.css";

export function Players(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    ScoreNotifier.addHandler(handleScoreEvent);

    return () => {
      ScoreNotifier.removeHandler(handleScoreEvent);
    };
  });

  function handleScoreEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === ScoreEvent.Submit) {
        message = `submitted a score of ${event.value.score}`;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players'>
      Currently logged in as:
      <span className='player-name'> {userName? userName : "Not logged in"}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
