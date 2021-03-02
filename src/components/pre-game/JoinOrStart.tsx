import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { SubmitButton } from "src/components/shared/SubmitButton";
import { SocketContext } from "src/context/socket";

import { useRouter } from "next/router";

export const JoinOrStart: React.FC = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const [gameCode, setGameCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    // socket.on("info", console.log);
  }, []);

  const handleGameCodeText = (e: React.SyntheticEvent) => {
    setGameCode((e.target as HTMLInputElement).value);
  };
  const handleJoin = () => {
    socket.emit("join-game", { gameCode });
    socket.on("join-game-success", (msg: string) => {
      router.push("/game-setup");
    });
  };
  const handleStartNew = () => {
    socket.emit("create-game", {}); // TODO: could do these in ack/cb fashion instead
    socket.on("create-game-success", (msg: string) => {
      router.push("/game-setup");
    });
  };

  return (
    <Wrapper>
      <label htmlFor="gameId">Join existing game </label>
      <input
        type="text"
        name="gameId"
        placeholder="Enter game code"
        onChange={handleGameCodeText}
      />
      <SubmitButton handleSubmit={handleJoin}>Join</SubmitButton>
      OR
      <SubmitButton handleSubmit={handleStartNew}>
        Start a new game
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
