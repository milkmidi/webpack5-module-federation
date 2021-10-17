import React, { lazy, Suspense } from 'react';
import loadComponent from './loadComponent';

const SystemComponent = (props) => {
  const Component = lazy(() => loadComponent('app1', `./${props.module}`));
  return (
    <Suspense fallback="Loading System">
      <Component {...props} />
    </Suspense>
  );
};

export default React.memo(SystemComponent, () => true);
