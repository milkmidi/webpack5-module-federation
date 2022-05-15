/* eslint-disable import/no-unresolved */
import React from 'react';

const Header = React.lazy(() => import('app1/Header'));
const Footer = React.lazy(() => import('app1/Footer'));
// const EmotionReactComponent = React.lazy(() => import('app1/EmotionReactComponent'));

export default function RemoteComponent():JSX.Element {
  return (
    <div>
      <React.Suspense fallback="Loading header">
        <Header initCount={10} />
      </React.Suspense>
      <React.Suspense fallback="Loading header">
        <Footer />
      </React.Suspense>
      {/* <React.Suspense fallback="Loading header">
        <EmotionReactComponent />
      </React.Suspense> */}
    </div>
  );
}
