import c from "clsx";
import {MDXRemote} from "next-mdx-remote";
import React from "react";

import DocPagination from "$components/doc-pagination";
import Sidebar from "$components/sidebar";
import SidebarNavigation from "$components/sidebar-navigation";
import {DocPageProps, Navigation, NavigationItem} from "$lib/types";

const pageToDoc = (
  navigation: Navigation,
  topic: string,
  slug?: string,
): {title: string; href: string} | undefined => {
  const target = navigation.reduce((memo, [, section]) => {
    if (memo) return memo;

    return section.find((el) => el.slug === slug);
  }, undefined as NavigationItem | undefined);

  if (!target) return;

  // eslint-disable-next-line consistent-return
  return {title: target.title, href: `/${topic}/${slug}`};
};

const DocPage = ({source, meta, navigation, topic}: DocPageProps) => {
  const prev = pageToDoc(navigation, topic, meta.prev);
  const next = pageToDoc(navigation, topic, meta.next);

  const paginationClassName = c("flex border-t border-sapphire pt-4", {
    "justify-between": prev && next,
    "justify-end": !prev && next,
  });

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

        <section className={paginationClassName}>
          {prev && (
            <DocPagination kind="prev" title={prev.title} href={prev.href} />
          )}
          {next && (
            <DocPagination kind="next" title={next.title} href={next.href} />
          )}
        </section>
      </article>
    </main>
  );
};

export default DocPage;
