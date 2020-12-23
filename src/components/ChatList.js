import React from "react";
import PropTypes from "prop-types";
import Chat from "./Chat";

export default class ChatList extends React.Component {
  render() {
    const { list, userId, goHandler, joinHandler, deleteHandler } = this.props;
    return (
      <>
        {list.length ? (
          <ul>
            {list.map((chat) => (
              <Chat
                userId={userId}
                chat={chat}
                goHandler={goHandler}
                joinHandler={joinHandler}
                deleteHandler={deleteHandler}
                key={chat.id}
              />
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
  userId: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      participants: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  goHandler: PropTypes.func,
  joinHandler: PropTypes.func,
  deleteHandler: PropTypes.func
};
