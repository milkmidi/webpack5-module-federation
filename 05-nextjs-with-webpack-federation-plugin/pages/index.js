import Head from "next/head";
import dynamic from 'next/dynamic';
import loadComponent from '../components/loadComponent';

const RemoteHeader = dynamic(() =>  import("../components/RemoteHeader"), { ssr: false });

/* loadComponent('app1', "./MyModel").then((module) => {
  console.log(module.default)
}) */

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>nextjs</h1>
        <RemoteHeader />
      </main>
    </div>
  );
}
