import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/css';
// import MyModel from 'app1/MyModel';
// import Header from 'app1/Header';
import SystemComponent from './SystemComponent';
import loadComponent from './loadComponent';
// import InnerComponent from './InnerComponent';

// console.log(MyModel);

console.log(_.get({ name: 'milkmidi' }, 'name'));
// import MyModel from 'app1/MyModel';

// console.log(MyModel);

//*
loadComponent('app1', './MyModel').then((myModel) => {
  console.log(myModel.getData());
});
// */

const style = css`
  border: 1px solid red;
  padding: 8px;
`;

const App:React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className={style}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <SystemComponent module="Header" initCount={100} />
      <SystemComponent module="Footer" />
    </div>
  );
};

export default App;
