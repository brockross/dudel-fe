import React from "react";
import styled from "styled-components";
export interface ConnectedPlayersProps {
  playerList: Array<any>; // TODO type this good
}
export const ConnectedPlayers: React.FC<ConnectedPlayersProps> = ({
  playerList,
}) => {
  return (
    <Container>
      {playerList.map((player, idx) => (
        <p key={`${idx}-${player}`}>
          {player.username || "connected player"} {player.isFounder && `| VIP`}
        </p>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid teal;
  border-radius: 7px;
  padding: 10px;
`;
