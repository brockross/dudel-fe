import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { SubmitButton } from "src/components/shared/SubmitButton";
import { SocketContext } from "src/context/socket";

export const JoinOrStart: React.FC = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("testyBoi", console.log);
  }, []);

  return (
    <Wrapper>
      <label htmlFor="gameId">Join existing game </label>
      <input type="text" name="gameId" placeholder="Enter game code" />
      <SubmitButton>Join</SubmitButton>
      OR
      <SubmitButton>Start a new game</SubmitButton>
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
