import React from "react";

import { AddUser } from "src/components/game-setup/AddUser";
import { ConnectedPlayers } from "src/components/game-setup/ConnectedPlayers";
import { ContentWrapper } from "src/components/shared/shared-styled";

const GameSetup = () => {
  return (
    <ContentWrapper>
      <AddUser />
      <ConnectedPlayers />
    </ContentWrapper>
  );
};

export default GameSetup;
