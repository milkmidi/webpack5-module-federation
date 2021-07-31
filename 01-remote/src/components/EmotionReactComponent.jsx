// @jsx jsx
import React from "react";
import { css, jsx } from '@emotion/react';

const EmotionReactComponent = (props) => {
  const [count, setCount] = React.useState(props.initCount || 0);
  return (
    <div css={css`
      background:red;
    `}>
      <h2>Header, count:{count}</h2>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
};

export default React.memo(EmotionReactComponent);