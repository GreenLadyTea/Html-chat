import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Message from "./Message";
import { describe, test } from "@jest/globals";

describe("Message component", () => {
  test("Message matches snapshot", () => {
    const nickname = "test";
    const content = "test";
    const component = renderer.create(<Message nickname={nickname} content={content} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("Message shows nick and message", () => {
    const nickname = "test";
    const content = "test";
    const component = shallow(<Message nickname={nickname} content={content} />);
    expect(component.text()).toContain(nickname);
    expect(component.text()).toContain(content);
  });
});
