import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import TestyBoi from "./TestyBoi";

export default {
  title: "TestyBoi",
  component: TestyBoi,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template = (args) => <TestyBoi {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  opt: "buddy",
};

export const Secondary = Template.bind({});
Secondary.args = {
  opt: "buster",
};
