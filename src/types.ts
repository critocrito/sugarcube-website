type MdxEdges<T extends unknown> = {
  edges: Array<{
    node: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: T;
    };
  }>;
};

export type MdxResult<T extends unknown> = {
  allMdx: MdxEdges<T>;
};

export type MdxPluginsInstrumentsResult<T extends unknown> = {
  plugins: MdxEdges<T>;
  instruments: MdxEdges<T>;
};

export type MdxPage = {
  title: string;
};

export type MdxSidebarPage = MdxPage & {
  parents: string[];
  prev?: string;
  next?: string;
};

export type MdxPluginPage = MdxPage & {
  path: string;
};

export type MdxInstrumentPage = MdxPluginPage;

export type MdxPages = MdxResult<MdxPage>;

export type MdxSidebar = MdxResult<MdxSidebarPage>;

export type MdxPluginsInstruments = MdxPluginsInstrumentsResult<MdxPluginPage>;

export type NavItem = {
  directory: "sugarcube" | "ncube";
  title: string;
  items: Array<{slug: string}>;
};

export type Frontmatter = MdxSidebarPage & {root: string};
