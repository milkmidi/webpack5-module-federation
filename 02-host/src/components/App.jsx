import React from 'react';
import RemoteHeader from './RemoteHeader';
import { css } from '@emotion/css';
// import MyModel from 'app1/MyModel';
// import Header from 'app1/Header';

const style = css`
  border: 2px solid black;
  padding: 10px;
  background: #bbb;
`

export default () => {
  return (
    <div className={style}>
      <h1>Host</h1>
      {/* <Header /> */}
      <RemoteHeader />
    </div>
  );
}
