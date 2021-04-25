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
  const [roundType, setRoundType] = useState<RoundType>(RoundType.guess);
  const [promptText, setPromptText] = useState("waiting for prompt...");

  useEffect(() => {
    // init
    socketFetch(socket, "fetch-initial-prompt").then((prompt: string) => {
      console.log(`got prompt: ${prompt}`);
      setPromptText(prompt);
    });

    // listeners
  }, []);
  window.__setRoundType = (str) => setRoundType(str); // hack to make it easier to swap states for dev

  return (
    <ContentWrapper>
      {roundType === RoundType.doodle && (
        <DoodleRound promptText={promptText} />
      )}
      {roundType === RoundType.guess && <GuessRound />}
    </ContentWrapper>
  );
};

export default Gameplay;
