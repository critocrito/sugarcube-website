import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";
import React from "react";

import SidebarNav from "$components/sidebar-nav";
import {loadMdx, slugs} from "$lib/data";
import {MetaHeader} from "$lib/types";

type Params = {
  params: {
    slug: string;
  };
};

interface PageProps {
  source: MDXRemoteSerializeResult;
  meta: MetaHeader;
  sections: string[];
}

export const getStaticPaths = async () => {
  const paths = (await slugs("discovery")).map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params: {slug}}: Params) => {
  const {content, meta} = await loadMdx("discovery", slug);
  return {props: {source: await serialize(content), meta, sections: []}};
};

const Page = ({source, meta: _meta, sections}: PageProps) => {
  return (
    <>
      <main className="desktop:container desktop:mx-auto flex space-x-6 py-8">
        <aside>
          <SidebarNav sections={sections} />
        </aside>

        <article className="prose tablet:prose-lg">
          <MDXRemote {...source} />
        </article>
      </main>
    </>
  );
};

export default Page;
