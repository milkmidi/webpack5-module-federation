/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable */

const loadComponent = async (scope, module) => {
  // @ts-ignore
  await __webpack_init_sharing__('default');
  console.log(scope, module);
  const container = window[scope]; // or get the container somewhere else
  // console.log('container', container);
  // Initialize the container, it may provide shared modules
  // console.log('__webpack_share_scopes__', __webpack_share_scopes__.default); // webpack ModuleFederationPlugin share 要填
  // @ts-ignore
  await container.init(__webpack_share_scopes__.default);
  // await container.init(initShared)
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
};
export default loadComponent;
