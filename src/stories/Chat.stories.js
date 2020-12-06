import React from "react";
import Chat from "../components/Chat";
import { action } from "@storybook/addon-actions";

export default {
  title: "Chat",
  component: Chat
};

const Template = (args) => <Chat {...args} />;

export const Common = Template.bind({});
Common.args = {
  id: "853d59e4a2b8e",
  title: "Первый чатик",
  clickHandle: action("clicked!")
};
