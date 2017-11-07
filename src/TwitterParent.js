import React, { Component } from 'react';
import Timeline from'./Timeline.js';
import Composition from'./Composition.js';
import Hashtags from'./Hashtags.js';


class TwitterParent extends Component {
  render() {
    return (
      <section className="container">
        <Timeline />
        <Composition />
        <Hashtags />
      </section>
    );
  }
}

export default TwitterParent;
