import React, { useEffect } from "react";
import styled from "styled-components";
import Sketchpad from "src/sketchpad";

const DoodleSlide = (props) => {
  const { pageData } = props;
  const canvasId = `readonly-sketch-${pageData.artist}`;
  useEffect(() => {
    if (!pageData?.doodleJSON) {
      return;
    }
    const sketchpad = new Sketchpad({
      element: `#${canvasId}`,
      readOnly: true,
      ...JSON.parse(pageData.doodleJSON),
    });
    sketchpad.animate(3);
  }, []);

  return (
    <div>
      <canvas id={canvasId} />
      <span>artist: {pageData.artist}</span>
    </div>
  );
};

export default DoodleSlide;
