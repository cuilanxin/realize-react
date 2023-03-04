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
    <div style={{ color: 'red', width: 200, fontSize: 20 }} className="class-name">
      函数组件
      <ClassComponent />
    </div>
  );
}
// const element2 = <ClassComponent />;
// const element2 = React.createElement('div', {}, 2);
// console.log('element2: ', element2);
// const element2 = (
//   <div>
//     hello <span>word</span>
//     {null}
//     <FunctionComponent />
//   </div>
// );

ReactDOM.render(<FunctionComponent />, document.getElementById('root'));
