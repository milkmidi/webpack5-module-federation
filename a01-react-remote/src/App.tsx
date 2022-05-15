import React from 'react';
import useCounter from './hooks/useCounter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { count } = useCounter();
  return (
    <div className="app">
      <h1>
        Remote, count:
        {count}
      </h1>
      <Header />
      <Footer />
    </div>
  );
};
export default App;
