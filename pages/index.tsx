import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";
import React from "react";

interface PageProps {
  source: MDXRemoteSerializeResult;
}

export const getStaticProps = async () => {
  const source = "Some **mdx** text, with a component <Test />";
  const mdxSource = await serialize(source);
  return {props: {source: mdxSource}};
};

const Page = ({source}: PageProps) => {
  return (
    <main className="container mx-auto text-center">
      <MDXRemote {...source} />
    </main>
  );
};

export default Page;
