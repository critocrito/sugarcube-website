/* eslint react/jsx-props-no-spreading: off */
import "$css/index.css";

import {MDXProvider} from "@mdx-js/react";
import {AppProps} from "next/app";
import React from "react";

import Footer from "$components/footer";
import Gif from "$components/gif";
import Header from "$components/header";
import Image from "$components/image";

const components = {img: Image, Gif};

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
