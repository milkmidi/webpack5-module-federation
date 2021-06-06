import React from 'react';

let inProgress = {};
let completeMap = {}
const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(!!completeMap[url]);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }
    const done = () => {
      setReady(true);
      setFailed(false);
    }

    if(inProgress[url]) { 
      inProgress[url].push(done);
      return;
    }

    inProgress[url] = [done];

    const element = document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    element.async = true;
    // element.crossorigin = true;

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      let doneFns = inProgress[url];
      delete inProgress[url];
      completeMap[url] = true;
      // script.parentNode && script.parentNode.removeChild(script);
      if (doneFns) {
        doneFns.forEach((fn)=> { 
          fn(); 
        });
      }
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      // console.log(`Dynamic Script Removed: ${url}`);
      // document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};
export default useDynamicScript;