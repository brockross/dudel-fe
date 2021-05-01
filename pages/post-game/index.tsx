import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

import { ContentWrapper } from "src/components/shared/shared-styled";
import TimedWrapper from "src/components/shared/TimedWrapper";
import Slideshow from "src/components/post-game/Slideshow";

import sampleEndData from "src/components/post-game/sample-end-data.json";

const PostGame = () => {
  const [currSketchbookIdx, setCurrSketchbookIdx] = useState<number>(0);

  const handleSketchbookFinish = () => {
    console.log("sketchbook done!");
    if (currSketchbookIdx === sampleEndData.length - 1) {
      console.log("all sketchbooks done!");
      return;
    }
    setCurrSketchbookIdx(currSketchbookIdx + 1);
  };
  return (
    <ContentWrapper>
      <Slideshow
        sketchbook={sampleEndData[currSketchbookIdx]}
        onComplete={handleSketchbookFinish}
      />
    </ContentWrapper>
  );
};

export default PostGame;
