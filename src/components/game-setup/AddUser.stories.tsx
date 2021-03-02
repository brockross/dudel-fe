import React from "react";
import { Story, Meta } from "@storybook/react";

import { AddUser } from "./AddUser";

export default {
  title: "Game Setup/Add User",
  component: AddUser,
} as Meta;

const Template: Story = (args) => <AddUser {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
