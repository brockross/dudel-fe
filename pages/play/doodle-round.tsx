import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Doodle } from "src/components/play/Doodle";

type DoodleRoundProps = {
  guessText: string;
  handleSubmit: (data: any) => void;
};

const DoodleRound = (props: DoodleRoundProps) => {
  const { guessText, handleSubmit } = props;
  return (
    <div>
      <Doodle guess={guessText} handleSubmit={handleSubmit} />
    </div>
  );
};

export default DoodleRound;
