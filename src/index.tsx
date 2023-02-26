import React from './realize-react/react';
import ReactDOM from './realize-react/react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';

// class ClassComponent extends React.Component {
//   render() {
//     return <div>ClassComponent</div>;
//   }
// }
// const element2 = React.createElement('div', {}, 0);
const element2 = (
  <div>
    hello <span>word</span>
  </div>
);

ReactDOM.render(element2, document.getElementById('root'));
