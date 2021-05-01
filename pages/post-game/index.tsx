import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

import { ContentWrapper } from "src/components/shared/shared-styled";
import TimedWrapper from "src/components/shared/TimedWrapper";
import Slideshow from "src/components/post-game/Slideshow";

import sampleEndData from "src/components/post-game/sample-end-data.json";

const PostGame = () => {
  const [currSketchbookIdx, setCurrSketchbookIdx] = useState<number>(0);

  return (
    <ContentWrapper>
      <Slideshow compiledSketchbooks={sampleEndData} />
    </ContentWrapper>
  );
};

export default PostGame;
