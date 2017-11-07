import React, { Component } from 'react';
import TimeAgo from 'react-simple-timeago'



class Tweet extends Component {
  render() {
    return (
      <li className="tweet">
        <img className="avatar" src={this.props.avatar_url} alt="" />
        <div className="tweet-content">
            <span className="full-name">{this.props.username}</span>
            <span className="username">{this.props.handle}</span>
            <TimeAgo className="timestamp" date={this.props.created_at} />
          <p>{this.props.content}</p>
        </div>
      </li>
    );
  }
}

export default Tweet;
