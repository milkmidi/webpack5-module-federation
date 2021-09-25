import React from 'react';

export default function useCounter() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return {
    count,
    increment,
  };
}
