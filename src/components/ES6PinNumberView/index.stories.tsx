import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import { PinNumberView } from "./index";

export default {
  title: "ES6/TSPinNumberView",
  component: PinNumberView
} as Meta;

const Template: Story = (args) => <PinNumberView {...args} />;

export const SixPin = Template.bind({});
SixPin.args = {
  pin: 6
};
