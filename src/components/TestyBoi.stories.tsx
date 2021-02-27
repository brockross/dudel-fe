import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { TestyBoi, TestyProps } from "./TestyBoi";

export default {
  title: "TestyBoi",
  component: TestyBoi,
} as Meta;

const Template: Story<TestyProps> = (args) => <TestyBoi {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  opt: "buddy",
  num: 3,
};

export const Secondary = Template.bind({});
Secondary.args = {
  opt: "buster",
  num: "butt",
};
