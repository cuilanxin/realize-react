import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ClassComponent extends Component {
  render() {
    return <div>ClassComponent</div>;
  }
}

ReactDOM.render(<ClassComponent />, document.getElementById('root'));
