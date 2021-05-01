import React from 'react';
import useNameContext  from "app1/NameContextProvider";
const Header = React.lazy(() => import('app1/Header'));
const Footer = React.lazy(() => import('app1/Footer'));

export default function (){
  const {
    count,
    increment
  } = useNameContext();
  return  (
    <div>
      <h1>RemoteHandler {count}</h1>
      <button onClick={increment}>add</button>
      <React.Suspense fallback='Loading header'>
        <Header initCount={10} />
      </React.Suspense>
      <React.Suspense fallback='Loading header'>
        <Footer />
      </React.Suspense>
    </div>
  )
}
