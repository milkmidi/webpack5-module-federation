import React from 'react';
import RemoteHeader from './RemoteHeader';

import MyModel from 'app1/MyModel';
import Header from 'app1/Header';
import useCounter from 'app1/useCounter';
import { NameContextProvider } from "app1/NameContextProvider";


export default () => {
  const [count, setCount] = useCounter();
  const increment = React.useCallback(() => {
    setCount( prev=> prev + 1);
  }, []);
  const value = {
    count,
    setCount,
    increment,
  }
  return (
    <NameContextProvider.Provider value={value}>
      <div>
        <h1>Host {count}</h1>
        <button onClick={()=> setCount(count + 1)}>increment</button>
        {/* <Header /> */}
        <RemoteHeader />
      </div>
    </NameContextProvider.Provider>
  );
}
