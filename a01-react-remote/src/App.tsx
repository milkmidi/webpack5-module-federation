import React from 'react';
import useCounter from './hooks/useCounter';
import Header from './components/Header';
import Footer from './components/Footer';
import EmotionReactComponent from './components/EmotionReactComponent';

export default function App():JSX.Element {
  const { count } = useCounter();
  return (
    <div className="app">
      <h1>
        Remote, count:
        {count}
      </h1>
      <Header />
      <Footer />
      <EmotionReactComponent />
    </div>
  );
}
