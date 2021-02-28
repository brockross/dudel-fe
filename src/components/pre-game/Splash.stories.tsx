import React from "react";
import { Story, Meta } from "@storybook/react";

import { Splash } from "./Splash";

export default {
  title: "Pre-Game/Splash",
  component: Splash,
} as Meta;

const Template: Story = (args) => <Splash {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
