import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { JoinOrStart } from "src/components/pre-game/JoinOrStart";
import { ContentWrapper } from "src/components/shared/shared-styled";

import { SocketContext } from "src/context/socket";
import { GameCodeContext } from "src/context/game-code";
import { joinGame, createGame } from "src/helpers";

export const PreGame: React.FC = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const { setGameCode } = useContext(GameCodeContext);
  const router = useRouter();
  const [codeEntry, setCodeEntry] = useState("");

  const handleGameCodeText = (e: React.SyntheticEvent) => {
    setCodeEntry((e.target as HTMLInputElement).value);
  };

  const handleJoin = () => {
    joinGame(socket, codeEntry)
      .then((gameCode) => {
        setGameCode(gameCode);
        router.push("/game-setup");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleStartNew = () => {
    createGame(socket)
      .then((gameCode) => {
        setGameCode(gameCode);
        router.push("/game-setup");
      })
      .catch(console.error);
  };

  return (
    <ContentWrapper>
      <JoinOrStart
        handleGameCodeText={handleGameCodeText}
        handleJoin={handleJoin}
        handleStartNew={handleStartNew}
      />
    </ContentWrapper>
  );
};

export default PreGame;
