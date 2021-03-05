import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { SocketContext } from "src/context/socket";

export interface ConnectedPlayersProps {
  playerList: Array<any>; // TODO type this good
}
export const ConnectedPlayers: React.FC<ConnectedPlayersProps> = ({
  playerList,
}) => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);

  return (
    <Container>
      {playerList.map((player) => (
        <p>
          {player.username} | {player.isFounder ? "VIP" : "ready!"}
        </p>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  border: 2px solid teal;
  border-radius: 7px;
`;
