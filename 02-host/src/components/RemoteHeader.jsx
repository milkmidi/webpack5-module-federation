import React from 'react';
const Header = React.lazy(() => import('app1/Header'));
const Footer = React.lazy(() => import('app1/Footer'));

export default function (){
  return  (
    <div>
      <React.Suspense fallback='Loading header'>
        <Header initCount={10} />
      </React.Suspense>
      <React.Suspense fallback='Loading header'>
        <Footer />
      </React.Suspense>
    </div>
  )
}
