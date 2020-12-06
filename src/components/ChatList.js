import React from "react";
import PropTypes from "prop-types";
import Chat from "./Chat";

export default class ChatList extends React.Component {
  render() {
    const { list, clickHandle } = this.props;
    return (
      <>
        {list.length ? (
          <ul>
            {list.map((chat) => (
              <Chat id={chat.id} title={chat.title} clickHandle={clickHandle} key={chat.id} />
            ))}
          </ul>
        ) : (
          <span>Нет никаких чатов(</span>
        )}
      </>
    );
  }
}

ChatList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  ),
  clickHandle: PropTypes.func
};
