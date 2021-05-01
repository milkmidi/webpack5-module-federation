import React from 'react';
import useDynamicScript from '../libs/hooks/useDynamicScript';
// 不推這樣寫
let inited= false;
const RemoteComponent = ({
  scope,
  module,
  fallback = <div>Loading...</div>,
  ...props
}) => {
  const { ready, failed } = useDynamicScript(
    "http://localhost:9527/remoteEntry.js"
  );

  
  if (!scope || !module) {
    throw new Error(
      "You must specify scope and module to import a Remote Component"
    );
  }

  if (!ready || failed || !global || !global[scope]) {
    return null;
  }
  // const Component = loadComponent('app1', './Footer')

  /* console.log('inited', inited);
  if (__webpack_share_scopes__.default && !inited) {
    console.log('__webpack_share_scopes__', __webpack_share_scopes__.default);
    global[scope].init(__webpack_share_scopes__.default);
    inited = true;
  } */
  // console.log(ready, global[scope]);
  if (!inited) {
    inited = true;
    global[scope].init({
      react: {
        '17.0.2': {
          get: () => Promise.resolve().then(() => () => require('react')),
          // loaded: true,
        },
      },
    });
  }

  // console.log(__webpack_init_sharing__("default"));

  const Component = React.lazy(() =>
    global[scope].get(module).then((factory) => factory())
  );

  return (
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
  );
};
export default RemoteComponent;