import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <form id="search-form">
          <input id="search" type="text" name="query" />
        </form>
        <i className="fa fa-search"></i>
      </div>
    );
  }
}

export default SearchBox;
