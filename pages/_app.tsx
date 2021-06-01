/* eslint react/jsx-props-no-spreading: off */
import "$css/index.css";

import {MDXProvider} from "@mdx-js/react";
import {AppProps} from "next/app";
import React from "react";

import Footer from "$components/footer";
import Header from "$components/header";

const components = {};

const App = ({Component, pageProps}: AppProps) => {
  return (
    <MDXProvider components={components}>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </MDXProvider>
  );
};

export default App;
