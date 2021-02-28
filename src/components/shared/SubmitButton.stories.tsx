import React from "react";
import { Story, Meta } from "@storybook/react";

import { SubmitButton, SubmitButtonProps } from "./SubmitButton";

export default {
  title: "Shared/Submit Button",
  component: SubmitButton,
} as Meta;

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handleSubmit: () => console.log("button test primary"),
};
