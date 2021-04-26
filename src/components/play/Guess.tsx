import React, { useEffect, useState } from "react";
import Sketchpad from "src/sketchpad";

import { SubmitButton } from "src/components/shared/SubmitButton";

// importing sample json here instead of in story because storybook apparently gets bogged down with beeeg json
import sampleSketch from "src/sample-sketch.json";

export type GuessProps = {
  doodleJSON: JSON | string;
  handleSubmit: (data: string) => void;
};

export const Guess: React.FC<GuessProps> = ({ doodleJSON, handleSubmit }) => {
  const [guess, setGuess] = useState("");

  console.log(
    `%c ***debug | Guess.tsx > Guess.tsx`,
    "background-color: #12908E; color: #f7f7f7; border-radius: 5px; padding: 1em;"
  );
  console.log({ doodleJSON });
  useEffect(() => {
    const sketchpad = new Sketchpad({
      element: "#readonly-sketch",
      readOnly: true,
      ...JSON.parse(doodleJSON || JSON.stringify(sampleSketch)),
    });
    sketchpad.animate(2);
  }, [doodleJSON]);

  const handleGuessText = (e: React.SyntheticEvent) => {
    setGuess((e.target as HTMLInputElement).value);
  };

  const handleGuessSubmit = () => {
    handleSubmit(guess);
  };

  return (
    <div>
      <canvas id={"readonly-sketch"} />
      <label htmlFor="guess">What is this? </label>
      <input type="text" name="guess" onChange={handleGuessText} />
      <SubmitButton handleSubmit={handleGuessSubmit}>submit</SubmitButton>
    </div>
  );
};
