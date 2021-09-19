import React from 'react';
import { css } from '@emotion/css';

const style = css`
  font-family: Arial, Helvetica, sans-serif;
  border: 3px solid #27ae60;
  padding: 10px;
  background-color: #2ecc71;
  color: white;
  border-radius: 20px;
  h2 {
    font-size: 40px;
    margin-bottom: 5px;
  }
  button {
    font-size: 20px;
    font-weight: bold;
    padding: 2px 10px;
  }
`;

type HeaderProps = {
  initCount?: number
}

const Header:React.FC<HeaderProps> = (props) => {
  const {
    initCount = 0,
    children,
  } = props;
  const [count, setCount] = React.useState(initCount);

  React.useEffect(() => {
    const timeId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);
  return (
    <header className={style}>
      <h2>
        Header, count:
        {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {
        children
      }
    </header>
  );
};

export default React.memo(Header);
