import React from "react";
import { Story, Meta } from "@storybook/react";

import { JoinOrStart } from "./JoinOrStart";

export default {
  title: "Pre-Game/JoinOrStart",
  component: JoinOrStart,
} as Meta;

const Template: Story = (args) => <JoinOrStart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
