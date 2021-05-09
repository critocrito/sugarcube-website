/* eslint react/jsx-props-no-spreading: off */
import "$css/index.css";

import {MDXProvider} from "@mdx-js/react";
import {AppProps} from "next/app";
import React from "react";

import Test from "$components/test";

const components = {Test};

const App = ({Component, pageProps}: AppProps) => {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
