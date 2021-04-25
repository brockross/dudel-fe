import React from "react";
import { Story, Meta } from "@storybook/react";

import { ConnectedPlayers, ConnectedPlayersProps } from "./ConnectedPlayers";

export default {
  title: "Game Setup/Connected Players",
  component: ConnectedPlayers,
} as Meta;

const Template: Story<ConnectedPlayersProps> = (args) => (
  <ConnectedPlayers {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  playerList: [
    { username: "agent cooper", isFounder: true },
    { username: "log lady" },
  ],
};

export const ManyPlayers = Template.bind({});
ManyPlayers.args = {
  playerList: [
    { username: "agent cooper", isFounder: true },
    { username: "log lady" },
    { username: "audrey" },
    { username: "bob" },
    { username: "one-armed man" },
    { username: "sheriff truman" },
    { username: "ben" },
    { username: "jerry" },
  ],
};
