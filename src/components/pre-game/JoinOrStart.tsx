import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { SubmitButton } from "src/components/shared/SubmitButton";
import { SocketContext } from "src/context/socket";

import { useRouter } from "next/router";

export const JoinOrStart: React.FC = ({
  handleGameCodeText,
  handleJoin,
  handleStartNew,
}) => {
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
