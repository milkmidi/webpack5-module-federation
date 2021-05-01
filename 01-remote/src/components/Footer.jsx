import React, { useState } from "react";
import './Footer.css'
import useCounter from '../hooks/useCounter';

const Footer = () => {
  const [count, setCount] = useCounter(0);
  return (
    <footer className="footer">
      <h2>hi, Footer:9527</h2>
      <h3>count:{count}</h3>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </footer>
  )
};

export default React.memo(Footer);