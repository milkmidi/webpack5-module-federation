// @jsx jsx
import React from "react";
import { css, jsx } from '@emotion/react';

const InnerComponent = (props) => {
  const [count, setCount] = React.useState(props.initCount || 0);
  return (
    <div css={css`
      border: 2px solid black;
      padding: 20px;
      margin: 5px;
      background:#aabbcc;
    `}>
      <h2>InnerComponent, count:{count}</h2>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
};

export default React.memo(InnerComponent);