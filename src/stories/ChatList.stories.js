import React from "react";
import ChatList from "../components/ChatList";
import { action } from "@storybook/addon-actions";

export default {
  title: "ChatList",
  component: ChatList
};

const Template = (args) => <ChatList {...args} />;

export const Common = Template.bind({});
Common.args = {
  list: [
    {
      id: "dws72hd37s832",
      createdAt: "2020-12-07T03:48:24.735Z",
      title: "Суперчат"
    },
    {
      id: "7ye6eyr383shd3",
      createdAt: "2020-12-07T03:48:25.735Z",
      title: "И ещё чат"
    },
    {
      id: "74hf93hd73di39",
      createdAt: "2020-12-07T03:48:26.735Z",
      title: "Третий чат"
    }
  ],
  clickHandle: action("clicked!")
};

export const Empty = Template.bind({});
Empty.args = {
  list: [],
  clickHandle: action("clicked!")
};
