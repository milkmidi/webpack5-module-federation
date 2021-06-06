import React, { useState } from 'react';
import SystemComponent from './SystemComponent'
import loadComponent from './loadComponent';
import MyModel from 'app1/MyModel';

console.log(MyModel);

export default () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>UMD, {count}</h1>
      <button onClick={()=> setCount(count + 1)}>increment</button>
      <SystemComponent module="Header" initCount={10} />
      <SystemComponent module="Footer" />
    </div>
  );
}
