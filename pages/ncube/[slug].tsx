import {serialize} from "next-mdx-remote/serialize";
import React from "react";

import DocPage from "$components/doc-page";
import {DocPageProps, DocParams} from "$lib/types";
import {getDocPaths, getDocProps} from "$lib/utils";

export const getStaticPaths = async () => {
  const paths = await getDocPaths("ncube");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params: {slug}}: DocParams) => {
  const {content, meta, navigation} = await getDocProps("ncube", slug);

  return {props: {source: await serialize(content), meta, navigation}};
};

const Page = ({source, meta, navigation}: DocPageProps) => {
  return (
    <DocPage
      topic="ncube"
      source={source}
      meta={meta}
      navigation={navigation}
    />
  );
};

export default Page;
