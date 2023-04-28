import React from 'react';
import dynamic from 'next/dynamic';
import _ from 'lodash';
import loadComponent from '../utils/loadComponent'
const SystemComponent = dynamic(()=> import('../components/SystemComponent'), {
  ssr: false
})

const RemoteFooter = dynamic(()=> import('app1/RemoteFooter'), {
  ssr: false
});

// import SimpleModel from 'app1/SimpleModel'
console.log(_.get({}, 'name', 'default'));

 if (process.browser) {

  
  loadComponent('app1','./MyModel').then((rr) => {
    console.log(rr.add(1,1));
    console.log(rr.default);
  })
} 

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="container">
      <main>
        <h1>nextjs {count}</h1>
        <button onClick={()=> setCount(count+1)}>increment</button>
        <SystemComponent module="Header" initCount={100} />
        <SystemComponent module="Footer" />
        <RemoteFooter />
      </main>
    </div>
  );
}
