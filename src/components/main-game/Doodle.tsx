import React, { useState, useEffect } from "react";
import Sketchpad from "../../sketchpad";

export interface DoodleProps {
  prompt: string;
}

export const Doodle: React.FC<DoodleProps> = ({ prompt }): JSX.Element => {
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
  const handleSubmit = () => {
    // TODO: socketry
    // const sketchData = sketchpad.toJSON();
    console.log(sketchpad.toObject());
  };

  return (
    <div>
      <h4>your doodle prompt is...</h4>
      <h2>{prompt}</h2>
      <canvas
        id={"sketch-canvas"}
        style={{ border: "2px solid teal" }}
      ></canvas>
      <button onClick={handleUndo}>undo</button>
      <button onClick={handleRedo}>redo</button>
      <button onClick={handleSubmit}>submit!</button>
    </div>
  );
};