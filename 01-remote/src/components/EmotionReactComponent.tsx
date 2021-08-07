/** @jsx jsx */
import { useState, memo } from 'react';
import { css, jsx } from '@emotion/react';

type EmotionReactComponentProps= {
  initCount?: number;
}
const EmotionReactComponent:React.FC<EmotionReactComponentProps> = (props) => {
  const {
    initCount = 0,
  } = props;
  const [count, setCount] = useState(initCount);
  return (
    <div css={css`
      background:red;
    `}
    >
      <h2>
        Header, count:
        {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default memo(EmotionReactComponent);
