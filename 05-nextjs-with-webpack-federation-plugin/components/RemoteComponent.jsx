import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

const loadComponent = (scope, module) => {
  console.log('loadComponent', scope, module);
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    const container = window[scope] // or get the container somewhere else
    console.log('container', container);
    // Initialize the container, it may provide shared modules
    // console.log('__webpack_share_scopes__', __webpack_share_scopes__.default); // webpack ModuleFederationPlugin share 要填
    await container.init(__webpack_share_scopes__.default)
    // await container.init(initShared)
    const factory = await window[scope].get(module)
    const Module = factory()
    return Module
  }
}

// const Component = lazy(loadComponent('app1', './Header'));

const MfeButton = dynamic(
  () => {
    return import("app1/Footer").then(async(factory) => {
      const module = './Footer';
      const scope = 'app1'
      await __webpack_init_sharing__('default');
      const container = window[scope] // or get the container somewhere else
      console.log('container', container);
      // Initialize the container, it may provide shared modules
      console.log('__webpack_share_scopes__', __webpack_share_scopes__.default); // webpack ModuleFederationPlugin share 要填
      // await container.init(__webpack_share_scopes__.default)
      // await container.init(initShared)
      // const factory = await window[scope].get(module)
      return factory
      // const Module = factory()
      // return Module
      /* console.log(factory);
      console.log(__webpack_init_sharing__);
      return factory; */
    })
  },
  {
    ssr: false,
  }
)

export default function MyComponent() {
  /* const Component = lazy(() => import('app1/Footer').then((factory) => {
    console.log(factory);
    return factory;
  })); */
  return (
    <MfeButton />
  );
}