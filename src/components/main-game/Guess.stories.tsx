import React from "react";
import { Story, Meta } from "@storybook/react";

import { Guess, GuessProps } from "./Guess";

export default {
  title: "Main Game/Guess",
  component: Guess,
} as Meta;

const Template: Story<GuessProps> = (args) => <Guess {...args} />;

export const Primary = Template.bind({});
