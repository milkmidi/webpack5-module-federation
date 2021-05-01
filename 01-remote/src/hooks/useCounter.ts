import React from 'react';

export default function useCounter(initCount = 0){
  const [count, setCount] = React.useState(initCount);

  return [count, setCount];
}