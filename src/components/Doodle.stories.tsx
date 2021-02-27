import React from "react";
import { Story, Meta } from "@storybook/react";

import { Doodle, DoodleProps } from "./Doodle";

export default {
  title: "Main Game/Doodle",
  component: Doodle,
} as Meta;

const Template: Story<DoodleProps> = (args) => <Doodle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  prompt: "dog octopus",
};
