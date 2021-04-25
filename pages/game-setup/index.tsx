import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { AddUser } from "src/components/game-setup/AddUser";
import { ConnectedPlayers } from "src/components/game-setup/ConnectedPlayers";
import { ContentWrapper } from "src/components/shared/shared-styled";
import { SubmitButton } from "src/components/shared/SubmitButton";

import { SocketContext } from "src/context/socket";
import { GameCodeContext } from "src/context/game-code";
import { socketFetch } from "src/helpers";

const GameSetup = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const { gameCode } = useContext(GameCodeContext);
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [playerList, setPlayerList] = useState([
    { username: "placeholder", isFounder: false },
  ]);

  useEffect(() => {
    // init
    socketFetch(socket, "fetch-player-list").then(setPlayerList);
    // listeners
    socket.on("user-added", setPlayerList);
    socket.on("game-start", () => {
      router.push("/play");
    });
  }, []);

  // handlers
  const handleUsernameText = (e: React.SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  };
  const handleAddUser = () => {
    socket.emit("add-user", { username });
  };
  const handleAllReady = () => {
    socket.emit("all-ready");
  };
  return (
    <ContentWrapper>
      <AddUser
        handleUsernameText={handleUsernameText}
        handleAddUser={handleAddUser}
      />
      <ConnectedPlayers playerList={playerList} />
      <SubmitButton handleSubmit={handleAllReady}>Everyone ready?</SubmitButton>
      <p>game code: {gameCode}</p>
    </ContentWrapper>
  );
};

export default GameSetup;
