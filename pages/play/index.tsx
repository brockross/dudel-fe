import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { ContentWrapper } from "src/components/shared/shared-styled";
import DoodleRound from "./doodle-round";
import GuessRound from "./guess-round";

import { SocketContext } from "src/context/socket";
import { socketFetch } from "src/helpers";

type GameplayProps = {};
enum RoundType {
  doodle = "doodle",
  guess = "guess",
}

const Gameplay = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const [roundType, setRoundType] = useState<RoundType>(RoundType.doodle);
  const [guessText, setGuessText] = useState("waiting for prompt...");
  const [doodleJSON, setDoodleJSON] = useState("");

  useEffect(() => {
    // init
    socketFetch(socket, "fetch-initial-prompt").then((prompt: string) => {
      console.log(`got prompt: ${prompt}`);
      setGuessText(prompt);
    });

    // listeners
    socket.on("next-round", (type: RoundType) => {
      socketFetch(socket, "fetch-current-submission").then((data) => {
        console.log(
          `%c ***debug | index.tsx > fetch-current-submission`,
          "background-color: #12908E; color: #f7f7f7; border-radius: 5px; padding: 1em;"
        );
        console.log({ data });
        if (data.type === RoundType.guess) {
          setGuessText(data.guess);
        }
        if (data.type === RoundType.doodle) {
          setDoodleJSON(data.doodleJSON);
        }
      });
      setRoundType(type);
    });
  }, []);

  window.__setRoundType = (str) => setRoundType(str); // hack to make it easier to swap states for dev

  const handleSubmit = (data) => {
    socket.emit("player-submit", data);
  };

  return (
    <ContentWrapper>
      {roundType === RoundType.doodle && (
        <DoodleRound guessText={guessText} handleSubmit={handleSubmit} />
      )}
      {roundType === RoundType.guess && (
        <GuessRound doodleJSON={doodleJSON} handleSubmit={handleSubmit} />
      )}
    </ContentWrapper>
  );
};

export default Gameplay;
