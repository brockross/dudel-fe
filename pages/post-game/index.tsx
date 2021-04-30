import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

import TimedWrapper from "src/components/shared/TimedWrapper";

import sampleEndData from "src/components/post-game/sample-end-data.json";

const PostGame = () => {
  const [displayedSlide, setDisplayedSlide] = useState(0);

  setInterval(() => {
    setDisplayedSlide(displayedSlide + 1);
  }, 5000);

  console.log(sampleEndData);

  return (
    <div>
      post game time, babey -- --{" "}
      {JSON.stringify(sampleEndData[displayedSlide])}
    </div>
  );
};

export default PostGame;
