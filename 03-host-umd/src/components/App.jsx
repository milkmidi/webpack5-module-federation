import React from 'react';
// import RemoteHeader from './RemoteHeader';
import SystemComponent from './SystemComponent'
import loadComponent from './loadComponent';
// import LoadScriptHeader from './LoadScriptHeader'
import MyModel from 'app1/MyModel';
import useCounter from 'app1/useCounter'

console.log(MyModel);

/* 
let MyModel;
loadComponent('app1', './MyModel').then((module) => {
  console.log(module.add(1,1))
  MyModel = module;
})
 */
/* window['app1'].get('./MyModel').then((factory) => factory())
  .then((module) => {
    console.log(module)
  }) */

export default () => {
  const [count, setCount] = useCounter(0);
  return (
    <div>
      <h1>UMD, {count}</h1>
      <button onClick={()=> setCount(count+1)}>increment</button>

      {/* <RemoteHeader /> */}
      <SystemComponent module="Header" initCount={10} />
      <SystemComponent module="Footer" />
      {/* <LoadScriptHeader module="Header" /> */}
      {/* <LoadScriptHeader module="Footer" /> */}
    </div>
  );
}
