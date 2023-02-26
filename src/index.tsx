import React from './realize-react/react';
import ReactDOM from './realize-react/react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';

// class ClassComponent extends React.Component {
//   render() {
//     return <div>ClassComponent</div>;
//   }
// }
const element2 = React.createElement('div', {}, null);
console.log('element2: ', element2);
// const element2 = (
//   <div>
//     hello <span>word</span>
//     {null}
//   </div>
// );

ReactDOM.render(element2, document.getElementById('root'));
