
import React from 'react';

/** @jsx React.DOM*/

const Counter = React.createClass({
  incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  getInitialState: function() {
    return {
      count: 0
    };
  }, 
  render: function() {
    return (
      <div>
        <h1>Count:  {this.state.count}</h1>

      </div>
    );
  }
});

