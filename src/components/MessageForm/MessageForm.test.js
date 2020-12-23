import React from "react";
import { shallow } from "enzyme";
import MessageForm from "./MessageForm";
import { describe, jest, test } from "@jest/globals";

describe("MessageForm", () => {
  test("runs callback with proper values", () => {
    const content = "Content";
    const handler = jest.fn();
    const component = shallow(<MessageForm postMessage={handler} />);
    component.find('input[type="text"]').simulate("change", { target: { value: content } });
    component.find('button[type="submit"]').simulate("click");
    expect(handler).toHaveBeenCalledWith({ content });
  });
});
