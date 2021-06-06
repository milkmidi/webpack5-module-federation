import React from 'react';
import dynamic from 'next/dynamic';
// import UseDynamicRemoteComponent from '../components/UseDynamicRemoteComponent';
const SystemComponent = dynamic(()=> import('../components/SystemComponent'), {
  ssr: false
})

const MyModel = import('app1/MyModel').then((rr) => {
  console.log(rr.default);
  return rr.default;
})

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="container">
      <main>
        <h1>nextjs {count}</h1>
        <button onClick={()=> setCount(count+1)}>increment</button>
        {/* <UseDynamicRemoteComponent initCount={100} /> */}
        <SystemComponent module="Header" initCount={100} />
        <SystemComponent module="Footer" />
      </main>
    </div>
  );
}
