import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Guess } from "src/components/play/Guess";

type GuessRoundProps = {
  doodleJSON: JSON | string;
  handleSubmit: (data: any) => void;
  hasSubmitted: boolean;
};

const GuessRound = (props: GuessRoundProps) => {
  const { doodleJSON, handleSubmit, hasSubmitted } = props;
  return (
    <div>
      {!hasSubmitted ? (
        <Guess doodleJSON={doodleJSON} handleSubmit={handleSubmit} />
      ) : (
        <PostSubmitText>G O O D S U B M I T</PostSubmitText>
      )}
    </div>
  );
};

const PostSubmitText = styled.p`
  color: teal;
`;

export default GuessRound;
