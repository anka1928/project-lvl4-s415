import React from 'react';
import connect from '../connect';


const mapStateToProps = state => ({
  currentChannel: state.currentChannelId,
  messages: state.messages.filter(({ channelId }) => channelId === state.currentChannelId),
});

@connect(mapStateToProps)
class Chat extends React.Component {
  messagesRender = ({ text, name, id }) => (
    <li className="list-group-item" role="tabpanel" key={id}>
      {`${name}: `}
      {text}
    </li>
  );

  render() {
    const { messages } = this.props;

    return (
      <div className="h-75 mb-3">
        <p>Messages</p>
        <div className="overflow-auto h-100">
          {messages.length !== 0
          && (
          <ul className="list-group-flush h-100 pl-0">
            {messages.map(this.messagesRender)}
          </ul>
          )
        }
        </div>
      </div>
    );
  }
}

export default Chat;
