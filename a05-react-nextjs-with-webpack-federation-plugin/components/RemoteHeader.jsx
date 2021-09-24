import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import loadComponent from './loadComponent';


const Component = lazy(() => loadComponent('app1', './Header'));


function RemoteHeader() {
  return (
    <Suspense fallback={<div />}>
      <Component initCount={100} />
    </Suspense>
  );
}
export default React.memo(RemoteHeader, () => true);