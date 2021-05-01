import React from 'react';
import dynamic from 'next/dynamic';

const RemoteHeader2 = dynamic(()=> import('../components/RemoteHeader2'), {
  ssr: false
});
const SystemComponent = dynamic(()=> import('../components/SystemComponent'), {
  ssr: false
})
/* const MyModel = import('app1/MyModel').then((rr) => {
  console.log(rr);
  return rr;
}) */

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="container">
      <main>
        <h1>nextjs {count}</h1>
        <button onClick={()=> setCount(count+1)}>increment</button>
        {/* <RemoteHeader initCount={10} /> */}
        {/* <RemoteComponent scope="app1" module="./Header" /> */}
        {/* <RemoteComponent2 scope="app1" module="./Footer" /> */}
        {/* <RemoteHeader2 /> */}
        <SystemComponent module="Header" initCount={10} />
        <SystemComponent module="Footer" />
      </main>
    </div>
  );
}
