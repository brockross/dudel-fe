import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Guess } from "src/components/play/Guess";

type GuessRoundProps = {
  doodleJSON: JSON | string;
  handleSubmit: (data: any) => void;
};

const GuessRound = (props: GuessRoundProps) => {
  const { doodleJSON, handleSubmit } = props;
  return (
    <div>
      <Guess doodleJSON={doodleJSON} handleSubmit={handleSubmit} />
    </div>
  );
};

export default GuessRound;
