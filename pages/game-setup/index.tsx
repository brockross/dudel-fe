import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { AddUser } from "src/components/game-setup/AddUser";
import { ConnectedPlayers } from "src/components/game-setup/ConnectedPlayers";
import { ContentWrapper } from "src/components/shared/shared-styled";

import { SocketContext } from "src/context/socket";
import { GameCodeContext } from "src/context/game-code";
import { fetchPlayerList } from "src/helpers";

const GameSetup = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const { gameCode } = useContext(GameCodeContext);

  const [username, setUsername] = useState("");
  const [playerList, setPlayerList] = useState([
    { username: "placeholder", isFounder: false },
  ]);

  useEffect(() => {
    // init
    fetchPlayerList(socket).then(setPlayerList);
    // listeners
    socket.on("user-added", setPlayerList);
  }, []);

  // handlers
  const handleUsernameText = (e: React.SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  };
  const handleAddUser = () => {
    socket.emit("add-user", { username });
  };
  return (
    <ContentWrapper>
      <h2>GAME CODE: {gameCode}</h2>
      <AddUser
        handleUsernameText={handleUsernameText}
        handleAddUser={handleAddUser}
      />
      <ConnectedPlayers playerList={playerList} />
    </ContentWrapper>
  );
};

export default GameSetup;
