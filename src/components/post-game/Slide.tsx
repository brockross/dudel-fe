import React from "react";
import styled from "styled-components";

const Slide = (props) => {
  const { type, doodleJSON, guess, author, artist } = props;

  return (
    <div>
      {type === "doodle" && `doodle: (some JSON) | doodle artist: ${artist}`}
      {type === "guess" && `guess: ${guess} | guess author: ${author}`}
    </div>
  );
};

export default Slide;
