import React, { Component } from 'react';
import Tweet from'./Tweet.js';
import './TweetData.json';

class Timeline extends Component {
  constructor(args) {
    super(args);
    this.state = {
      tweets: [],
    };
  }


  componentDidMount() {
    fetch("http://localhost:9393/tweets/recent")
    .then(results => {
      return results.json();
    }).then(data => {
      let tweeties = data.map((tweet) => {
        return(
          <Tweet {...tweet} key={tweet.id}/>
        )
      })
      this.setState({tweets: tweeties});
    })
  }

  render() {
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {this.state.tweets}
        </ul>
      </section>
    );
  }
}

export default Timeline;



