import React from './realize-react/react';
import ReactDOM from './realize-react/react-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';

class ClassComponent extends React.Component {
  render() {
    return 23;
  }
}

function FunctionComponent() {
  return (
    <div className="ssss" style={{ color: 'red' }}>
      函数组件
    </div>
  );
}
// const element2 = <ClassComponent />;
const element2 = React.createElement('div', {}, 2);
console.log('element2: ', element2);
console.log('element2: ', <FunctionComponent />);
// const element2 = (
//   <div>
//     hello <span>word</span>
//     {null}
//   </div>
// );

ReactDOM.render(<FunctionComponent />, document.getElementById('root'));
