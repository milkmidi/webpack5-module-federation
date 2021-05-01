import React, { lazy, Suspense } from 'react';

const App1Header = React.lazy(() => import('app1/Header'));

export default function MyComponent() {
  // /* const Component = lazy(() => import('app1/Footer').then((factory) => {
  //   console.log(factory);
  //   // console.log(global['app1'])
  //   /* console.log(global['app1'].get('./Footer'))
  //   // return global['app1'].get('./Footer').then((factory) => factory());
  //   await global['app1'].init({
  //     react: {
  //       '17.0.2': {
  //         get: () => Promise.resolve().then(() => () => require('react')),
  //         // loaded: true,
  //       },
  //     },
  //   }); */
  //   return factory;
  // })); */
  // console.log(Component)
  return (
    <Suspense fallback={<div>loading</div>}>
      <App1Header />
    </Suspense>
  );
}