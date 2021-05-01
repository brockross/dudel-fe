import React, { useState, useEffect } from "react";
import styled from "styled-components";

type SlideshowProps = {
  sketchbook: any[];
  onComplete: () => void;
};

const Slideshow = (props: SlideshowProps) => {
  const { sketchbook, onComplete } = props;
  // takes a single sketchbook array
  // plays through the slides using setTimeout + increment
  // passes single slide data down to slide components (rendered as entire mapped list, where only the current idx is visible in the window)
  // when last slide is finished, calls a "done" handler which lets parent know to pass down the next sketchbook
  const [displayedSlide, setDisplayedSlide] = useState<number>(0);

  useEffect(() => {
    if (displayedSlide < sketchbook.length) {
      setTimeout(() => {
        setDisplayedSlide(displayedSlide + 1);
      }, 3000);
    } else {
      setDisplayedSlide(0);
      onComplete();
    }
  }, [displayedSlide]);

  return (
    <div>
      post game time, babey -- -- {JSON.stringify(sketchbook[displayedSlide])}
    </div>
  );
  return <div>slideshow placeholder</div>;
};

export default Slideshow;
