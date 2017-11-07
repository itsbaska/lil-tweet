import React, { Component } from 'react';
import Tweet from'./Tweet.js';
import './TweetData.json';


class Timeline extends Component {
  constructor(args) {
    super(args);
    this.state = {
      tweets: []
    }
    this.iterator()
  }

iterator(){
  var data = require('./TweetData.json');
  for(var i = 0; i < data.length; i++) {
      this.state.tweets.push(data[i]);
  }
      console.log(this.state.tweets)
}
// iterator()
  // componentDidMount() {
  //   fetch("http://localhost:9393/tweets/recent")
  //   .then(results => {
  //     console.log(results)
  //     return results.json();
  //   }).then(data => {
  //     let tweeties =data.results.map((tweet) => {
  //       return(
  //         <div key={tweet.results}>
  //           <p>{tweet.username}</p>
  //           <p>{tweet.handle}</p>
  //           <p>{tweet.created_at}</p>
  //           <p>{tweet.content}</p>
  //           <img src={tweet.avatar_url} alt="" />
  //         </div>
  //       )
  //     })
  //     this.setState({tweets: tweeties});
  //     console.log(this.state.tweets)
  //   })
  // }

  render() {
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          <Tweet />
        </ul>
      </section>
    );
  }
}

export default Timeline;
