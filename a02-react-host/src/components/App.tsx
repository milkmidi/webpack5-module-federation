/* eslint-disable import/no-unresolved */
import React from 'react';
import { css } from '@emotion/css';
import Header from 'app1/Header';
import MyModel from 'app1/MyModel';
import RemoteComponent from './RemoteComponent';

console.log(MyModel);

const style = css`
  border: 2px solid black;
  padding: 10px;
  background: #bbb;
`;

export default function App():JSX.Element {
  return (
    <div className={style}>
      <h1>Host</h1>
      <Header />
      <RemoteComponent />
    </div>
  );
}
