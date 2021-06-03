import {MDXRemote} from "next-mdx-remote";
import React from "react";

import Sidebar from "$components/sidebar";
import SidebarNavigation from "$components/sidebar-navigation";
import {DocPageProps} from "$lib/types";

const DocPage = ({source, meta, navigation, topic}: DocPageProps) => {
  return (
    <main className="desktop:container desktop:mx-auto flex laptop:space-x-6 py-8 mx-3 laptop:mx-6">
      <Sidebar className="w-0 laptop:w-2/12">
        <SidebarNavigation
          topic={topic}
          activeSlug={meta.slug}
          navigation={navigation}
        />
      </Sidebar>

      <article className="prose tablet:prose-lg p-3 w-full laptop:w-10/12">
        <MDXRemote {...source} />
      </article>
    </main>
  );
};

export default DocPage;
