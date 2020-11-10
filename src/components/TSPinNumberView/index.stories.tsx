import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import { PinNumberView, Props } from "./index";

export default {
  title: "TSPinNumberView",
  component: PinNumberView
} as Meta;

const Template: Story<Props> = (args) => <PinNumberView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pin: 6
};
