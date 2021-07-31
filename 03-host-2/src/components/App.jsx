import React, { useState } from 'react';
import SystemComponent from './SystemComponent'
import loadComponent from './loadComponent';
import InnerComponent from './InnerComponent';
import { css } from '@emotion/css';
import _ from 'lodash';
console.log(_.get({name:'milkmidi'}, 'name'));
// import MyModel from 'app1/MyModel';

// console.log(MyModel);

//*
loadComponent('app1', './MyModel').then((myModel) => {
  console.log(myModel.getData())
})
// */

const style = css`
  border: 2px solid black;
`


export default () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className={style}>
      <h1>UMD, {count}</h1>
      <button onClick={()=> setCount(count + 1)}>increment</button>
      <InnerComponent />
      <hr />
      <SystemComponent module="Header" initCount={100} />
      <SystemComponent module="Footer" />
      <SystemComponent module="EmotionReactComponent" />
    </div>
  );
}
