import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";
import "./Pernille.css";

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Game
          gridSize={5}
          challengeSize={6}
          challengeSeconds={3}
          playSeconds={10}
          maxWrongAttempts={3}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
const Cell = ({ width }) => {
  let cellStatus = CellStatus.NORMAL;
  return (
    <div
      className="cell"
      style={{ width: `${width}%`, backgroundColor: cellStatus }}
    />
  );
};

const Footer = ({ startGame }) => {
  return (
    <>
      <div className="message">Game Message Here...</div>
      <div className="button" onClick={startGame}>
        <button>Start Spil</button>
      </div>
    </>
  );
};

const GameStatus = {
  NEW: "NEW",
  CHALLENGE: "CHALLENGE",
  PLAYING: "PLAYING",
  WON: "WON",
  LOST: "LOST"
};

const CellStatus = {
  NORMAL: "white",
  HIGHLIGHT: "lightblue",
  CORRECT: "lightgreen",
  WRONG: "pink"
};

const Game = ({ gridSize }) => {
  const cellIds = utils.createArray(gridSize * gridSize);
  const cellWidth = 100 / gridSize;
  const [gameStatus, setGameStatus] = useState(GameStatus.NEW);

  return (
    <div className="game">
      <div className="grid">
        {cellIds.map(cellId => (
          <Cell key={cellId} width={cellWidth} />
        ))}
      </div>
      <Footer startGame={() => setGameStatus(GameStatus.CHALLENGE)} />
    </div>
  );
};
/** https://jscomplete.com/playground/rs3.1 */
// Math science
const utils = {
  /* Create an array based on a numeric size property.
     Example: createArray(5) => [0, 1, 2, 3, 4] */
  createArray: size => Array.from({ length: size }, (_, i) => i),

  /* Pick random elements from origArray up to sampleSize
     And use them to form a new array.
     Example: sampleArray([9, 12, 4, 7, 5], 3) => [12, 7, 5] */
  sampleArray: (origArray, sampleSize) => {
    const copy = origArray.slice(0);
    const sample = [];
    for (let i = 0; i < sampleSize && i < copy.length; i++) {
      const index = Math.floor(Math.random() * copy.length);
      sample.push(copy.splice(index, 1)[0]);
    }
    return sample;
  },

  /* Given a srcArray and a crossArray, count how many elements 
     in srcArray exist or do not exist in crossArray.
     Returns an array like [includeCount, excludeCount]
     Example: arrayCrossCounts([0, 1, 2, 3, 4], [1, 3, 5]) => [2, 3] */
  arrayCrossCounts: (srcArray, crossArray) => {
    let includeCount = 0;
    let excludeCount = 0;
    srcLoop: for (let s = 0; s < srcArray.length; s++) {
      for (let c = 0; c < crossArray.length; c++) {
        if (crossArray[c] === srcArray[s]) {
          includeCount += 1;
          continue srcLoop;
        }
      }
      excludeCount += 1;
    }
    return [includeCount, excludeCount];
  }
};
