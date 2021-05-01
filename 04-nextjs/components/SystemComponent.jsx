import React, { lazy, Suspense } from 'react'

// 這是最好的寫法
// https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes-runtime-environment-variables/host/src/components/System.js
const loadComponent = (scope, module) => {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');

    // console.log(scope, module);
    const container = window[scope] // or get the container somewhere else
    // console.log('container', container);
    // Initialize the container, it may provide shared modules
    // console.log('__webpack_share_scopes__', __webpack_share_scopes__.default); // webpack ModuleFederationPlugin share 要填
    await container.init(__webpack_share_scopes__.default)
    // await container.init(initShared)
    const factory = await window[scope].get(module)
    const Module = factory()
    return Module
  }
}

const SystemComponent = (props) => {
  const Component = lazy(loadComponent('app1', './' + props.module));
  return (
    <Suspense fallback="Loading System">
      <Component {...props} />
    </Suspense>
  )
}

export default React.memo(SystemComponent, () => true)
