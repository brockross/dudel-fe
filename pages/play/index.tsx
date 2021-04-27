import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [roundType, setRoundType] = useState<RoundType>(RoundType.doodle);
  const [guessText, setGuessText] = useState("waiting for prompt...");
  const [doodleJSON, setDoodleJSON] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // init
    socketFetch(socket, "fetch-initial-prompt").then((prompt: string) => {
      console.log(`got prompt: ${prompt}`);
      setGuessText(prompt);
    });

    // listeners
    socket.on("next-round", (type: RoundType) => {
      setHasSubmitted(false);
      setRoundType(type);

      socketFetch(socket, "fetch-current-submission").then((data) => {
        if (data.type === RoundType.guess) {
          setGuessText(data.guess);
        }
        if (data.type === RoundType.doodle) {
          setDoodleJSON(data.doodleJSON);
        }
      });
    });

    socket.on("start-post-game", () => {
      router.push("/post-game");
    });
  }, []);

  const handleSubmit = (data) => {
    socket.emit("player-submit", data);
    setHasSubmitted(true);
  };

  return (
    <ContentWrapper>
      {roundType === RoundType.doodle && (
        <DoodleRound
          guessText={guessText}
          handleSubmit={handleSubmit}
          hasSubmitted={hasSubmitted}
        />
      )}
      {roundType === RoundType.guess && (
        <GuessRound
          doodleJSON={doodleJSON}
          handleSubmit={handleSubmit}
          hasSubmitted={hasSubmitted}
        />
      )}
    </ContentWrapper>
  );
};

export default Gameplay;
