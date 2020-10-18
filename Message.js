import React from 'react';
class Message extends React.Component {
    render()
    {
        const{nick, message} = this.props;
        return <div>
            <b>{nick}: </b>
            {message}
        </div>;
    }
}
export default Message;