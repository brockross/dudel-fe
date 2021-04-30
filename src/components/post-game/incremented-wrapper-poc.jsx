import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import TimedWrapper from "src/components/shared/TimedWrapper";

const PostGame = () => {
  const [displayedSlide, setDisplayedSlide] = useState(1);

  const handleExpire = () => {
    setDisplayedSlide(displayedSlide + 1);
  };

  return (
    <div>
      post game time, babey
      {displayedSlide == 1 && (
        <TimedWrapper displayCountdown={true} onExpire={handleExpire}>
          stuff in component 1
        </TimedWrapper>
      )}
      {displayedSlide == 2 && (
        <TimedWrapper displayCountdown={true} onExpire={handleExpire}>
          stuff in component 2
        </TimedWrapper>
      )}
      {displayedSlide == 3 && (
        <TimedWrapper displayCountdown={true} onExpire={handleExpire}>
          stuff in component 3
        </TimedWrapper>
      )}
    </div>
  );
};

export default PostGame;
