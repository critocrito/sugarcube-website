/* eslint react/jsx-props-no-spreading: off */
import "$css/index.css";
import "$css/prism-nord.css";

import {MDXProvider} from "@mdx-js/react";
import {AppProps} from "next/app";
import React from "react";

import CodeBlock from "$components/code-block";
import Footer from "$components/footer";
import Gif from "$components/gif";
import Header from "$components/header";
import Image from "$components/image";
import Note from "$components/note";
import Sponsors from "$components/sponsors";
import Synopsis from "$components/synopsis";
import Warning from "$components/warning";

const components = {
  img: Image,
  code: CodeBlock,
  Gif,
  Note,
  Sponsors,
  Synopsis,
  Warning,
};

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
