import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Message from "./Message";
import { describe, test } from "@jest/globals";

describe("Message component", () => {
  test("Message matches snapshot", () => {
    const nick = "test";
    const message = "test";
    const component = renderer.create(<Message nick={nick} message={message} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("Message shows nick and message", () => {
    const nick = "test";
    const message = "test";
    const component = shallow(<Message nick={nick} message={message} />);
    expect(component.text()).toContain(nick);
    expect(component.text()).toContain(message);
  });
});
