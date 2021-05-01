import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

// import DoodleSlide from "./DoodleSlide";
const DoodleSlide = dynamic(
  () => {
    return import("./DoodleSlide");
  },
  { ssr: false }
);

const SlideContent = (props) => {
  const { pageData } = props;
  const { type, doodleJSON, guess, author, artist } = pageData;

  return (
    <Wrapper>
      {type === "doodle" && <DoodleSlide pageData={pageData} />}
      {type === "guess" && `guess: ${guess} | guess author: ${author}`}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  color: white;
`;

export default SlideContent;
