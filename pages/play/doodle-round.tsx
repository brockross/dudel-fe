import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Doodle } from "src/components/play/Doodle";

type DoodleRoundProps = {
  guessText: string;
  handleSubmit: (data: any) => void;
  hasSubmitted: Boolean;
};

const DoodleRound = (props: DoodleRoundProps) => {
  const { guessText, handleSubmit, hasSubmitted } = props;

  return (
    <div>
      {!hasSubmitted ? (
        <Doodle guess={guessText} handleSubmit={handleSubmit} />
      ) : (
        <PostSubmitText>N I C E S U B M I T</PostSubmitText>
      )}
    </div>
  );
};

const PostSubmitText = styled.p`
  color: coral;
`;

export default DoodleRound;
