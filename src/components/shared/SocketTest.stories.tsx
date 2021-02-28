import React from "react";
import { Story, Meta } from "@storybook/react";

import { SocketTest } from "./SocketTest";

export default {
  title: "Shared/Socket Test",
  component: SocketTest,
} as Meta;

const Template: Story = (args) => <SocketTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
