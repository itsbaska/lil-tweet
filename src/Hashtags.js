import React, { Component } from 'react';
import Hashtag from'./Hashtag.js';


class Hashtags extends Component {
  render() {
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <ul>
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
          <Hashtag />
        </ul>
      </section>
    );
  }
}

export default Hashtags;
