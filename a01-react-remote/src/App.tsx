import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App():JSX.Element {
  return (
    <div className="app">
      <h1>Remote</h1>
      <Header />
      <Footer />
    </div>
  );
}
