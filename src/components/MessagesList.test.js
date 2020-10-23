import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import MessagesList from "./MessagesList";
import { describe, test } from "@jest/globals";

describe("MessagesList", () => {
  test("Add 2 new messages", () => {
    const messages = [
      { user: "user1", message: "Message from user1" },
      { user: "user2", message: "Message from user2" },
    ];
    const component = shallow(<MessagesList messages={messages} />);
    expect(component.find("Message")).toHaveLength(2);
  });
  test("Snap in-line", () => {
    const messages = [
      { user: "user1", message: "Message from user1" },
      { user: "user2", message: "Message from user2" },
    ];
    const component = renderer
      .create(<MessagesList messages={messages} />)
      .toJSON();
    expect(component).toMatchInlineSnapshot(`
      <div
        className="list-of-messages"
      >
        <div>
          <b>
            : 
          </b>
          Message from user1
        </div>
        <div>
          <b>
            : 
          </b>
          Message from user2
        </div>
      </div>
    `);
  });
});
