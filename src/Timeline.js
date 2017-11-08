import React, { Component } from 'react';
import Tweet from'./Tweet.js';
import './TweetData.json';

class Timeline extends Component {
  constructor(args) {
    super(args);
    this.state = {
      tweets: [],
    }
    this.iterator()
  }

iterator(){
  var data = require('./TweetData.json');
  for(var i = 0; i < data.length; i++) {
      this.state.tweets.push(data[i]);
  }
}

  render() {
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {this.state.tweets.map(function(tweet) {
            return (
              <Tweet {...tweet} key={tweet.id} />
            )
          })
        }
        </ul>
      </section>
    );
  }
}

export default Timeline;
