import React from 'react';
import loadComponent from './loadComponent';
// console.log(MyModel);
// const { default: SimpleModel } = await loadComponent('app1', './SimpleModel');
const { default: SimpleModel } = await import('app1/SimpleModel');
const { default: useCounter } = await import('app1/useCounter');
const { default: Header } = await import('app1/Header');
console.log(useCounter);
console.log(SimpleModel);

const App:React.FC = () => {
  // const [count, setCount] = React.useState(0);
  const {
    count,
    increment,
  } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <Header />
    </div>
  );
};

export default App;
