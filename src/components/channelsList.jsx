import React from 'react';


export default class ChannelsList extends React.Component {
  channelsRender = (channels) => {
    if (channels.length === 0) {
      return null;
    }
    const { id, name } = channels;
    return (
      <a key={id} href={`#${name}`} data-toggle="list" role="tab" className="list-group-item d-flex">
        {name}
      </a>
    );
  }

  render() {
    const { channels } = this.props;

    return (
      <div className="list-group-flush">
        {channels.map(this.channelsRender)}
      </div>
    );
  }
}