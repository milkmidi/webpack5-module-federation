import Head from "next/head";
import dynamic from 'next/dynamic';
// import RemoteComponent from '../components/RemoteComponent';
const RemoteComponent2 = dynamic(() => {
  return import('../components/RemoteComponent2')
}, {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container">
      <main>
        {/* <RemoteComponent scope="app1" module="./Header" /> */}
        <RemoteComponent2 module="./Header" />
      </main>
    </div>
  );
}
