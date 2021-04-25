import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Doodle } from "src/components/play/Doodle";

type DoodleRoundProps = {
  promptText: string;
};

const DoodleRound = (props: DoodleRoundProps) => {
  const { promptText } = props;
  return (
    <div>
      <Doodle prompt={promptText} />
    </div>
  );
};

export default DoodleRound;
