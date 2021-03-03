import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { SocketContext } from "src/context/socket";

export const ConnectedPlayers: React.FC = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const [playerList, setPlayerList] = useState([
    { username: "placeholder", isFounder: false },
  ]);
  useEffect(() => {
    socket.on("user-added", setPlayerList);
  }, []);

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
