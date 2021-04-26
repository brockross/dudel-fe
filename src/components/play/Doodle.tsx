import React, { useState, useEffect } from "react";
import Sketchpad from "src/sketchpad";

import { SubmitButton } from "src/components/shared/SubmitButton";

export type DoodleProps = {
  guess: string;
  handleSubmit: (data: any) => void;
};

export const Doodle: React.FC<DoodleProps> = ({
  guess,
  handleSubmit,
}): JSX.Element => {
  const [sketchpad, setSketchpad] = useState({});

  useEffect(() => {
    const sketchpad = new Sketchpad({
      element: "#sketch-canvas",
      width: 400,
      height: 400,
    });
    setSketchpad(sketchpad);
  }, []);

  const handleUndo = () => {
    sketchpad.undo();
  };
  const handleRedo = () => {
    sketchpad.redo();
  };
  const handleDoodleSubmit = () => {
    // const sketchData = sketchpad.toJSON();
    handleSubmit(sketchpad.toJSON());
  };

  return (
    <div>
      <h4>your doodle prompt is...</h4>
      <h2>{guess}</h2>
      <canvas
        id={"sketch-canvas"}
        style={{ border: "2px solid teal", borderRadius: "50%" }}
      ></canvas>
      <button onClick={handleUndo}>undo</button>
      <button onClick={handleRedo}>redo</button>
      <SubmitButton handleSubmit={handleDoodleSubmit}>submit!</SubmitButton>
    </div>
  );
};
