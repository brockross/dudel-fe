import React, { useEffect, useState } from "react";
import Sketchpad from "src/sketchpad";

import { SubmitButton } from "src/components/shared/SubmitButton";

// importing sample json here instead of in story because storybook apparently gets bogged down with beeeg json
import sampleSketch from "src/sample-sketch.json";

export interface GuessProps {
  sketchJSON: string;
}

export const Guess: React.FC<GuessProps> = ({ sketchJSON }) => {
  const [guess, setGuess] = useState("");

  useEffect(() => {
    const sketchpad = new Sketchpad({
      element: "#readonly-sketch",
      readOnly: true,
      ...JSON.parse(sketchJSON || JSON.stringify(sampleSketch)),
    });
    sketchpad.animate(2);
  }, []);

  const handleGuessText = (e: React.SyntheticEvent) => {
    setGuess((e.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    // TODO: socketry
    console.log({ guess });
  };
  return (
    <div>
      <canvas id={"readonly-sketch"} />
      <label htmlFor="guess">What is this? </label>
      <input type="text" name="guess" onChange={handleGuessText} />
      <SubmitButton handleSubmit={handleSubmit}>submit</SubmitButton>
    </div>
  );
};
