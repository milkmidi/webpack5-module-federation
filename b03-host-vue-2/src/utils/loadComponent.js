/* eslint-disable */

const loadComponent = async (scope, module) => {
  await __webpack_init_sharing__('default');
  console.log(scope, module);
  const container = window[scope]; // or get the container somewhere else
  // console.log('container', container);
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  // await container.init(initShared)
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
};
export default loadComponent;
