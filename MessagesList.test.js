import React from 'react';
import {shallow} from 'enzyme';
import MessagesList from './MessagesList';
import {test} from "@jest/globals";

test('Add 2 new messages', () => {
    const messages = [
        {user: "user1", message: "Message from user1"},
        {user: "user2", message: "Message from user2"}];
    const component = shallow(<MessagesList messages={messages}/>);
    expect(component.find('Message')).toHaveLength(2);
});