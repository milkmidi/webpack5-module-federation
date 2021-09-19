/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

type Props = {
  initCount?: number;
}

const InnerComponent:React.FC<Props> = (props) => {
  const {
    initCount = 0,
  } = props;
  const [count, setCount] = React.useState(initCount);
  return (
    <div css={css`
      border: 2px solid black;
      padding: 20px;
      margin: 5px;
      background:#aabbcc;
    `}
    >
      <h2>
        InnerComponent, count:
        {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default React.memo(InnerComponent);
