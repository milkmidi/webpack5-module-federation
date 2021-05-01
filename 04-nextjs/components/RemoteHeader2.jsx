import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';


// 這樣寫會 error ，不知道為什麼
const App1Header = lazy(() => import("app1/Header"));

export default function MyComponent() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <App1Header />
    </Suspense>
  );
}