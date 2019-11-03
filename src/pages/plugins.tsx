import React from "react";

import Layout from "../components/Layout";
import PluginsList from "../components/PluginsList";

const Plugins = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="w-third-ns">
          <PluginsList />
        </div>
        <div className="w-two-thirds-ns">
          <h1>SugarCube Plugins </h1>
          <p>This is a list of all plugins.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Plugins;
