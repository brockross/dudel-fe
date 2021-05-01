import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import SlideContent from "./SlideContent";

type SlideshowProps = {
  compiledSketchbooks: any[][];
};

const Slideshow = (props: SlideshowProps) => {
  const { compiledSketchbooks } = props;

  const slideshowSettings = {
    autoPlay: true,
    interval: 3000,
    // axis: "vertical",
    showArrows: false,
    showIndicators: false,
    showThumbs: false,
  };

  return (
    <Carousel {...slideshowSettings}>
      {compiledSketchbooks[1].map((pageData) => {
        return <SlideContent pageData={pageData} />;
      })}
    </Carousel>
  );
};

export default Slideshow;
