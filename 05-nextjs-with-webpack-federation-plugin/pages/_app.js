import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
        <title>Next</title>
        <script src="http://localhost:9527/remoteEntry.js" defer/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
