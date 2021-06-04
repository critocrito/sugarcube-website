import * as t from "io-ts";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

export const MetaHeaderV = t.intersection([
  t.type({title: t.string, section: t.string, slug: t.string}),
  t.partial({prev: t.string, next: t.string}),
]);

export type MetaHeader = t.TypeOf<typeof MetaHeaderV>;

export type MdxFile = {
  meta: MetaHeader;
  content: string;
};

export type NavigationItem = {
  slug: string;
  title: string;
};

// An array of tuples where the first element of the tuple is the section title
// and the second element a list of navigation items.
export type Navigation = [string, NavigationItem[]][];

export interface DocPageProps {
  topic: string;
  source: MDXRemoteSerializeResult;
  meta: MetaHeader;
  navigation: Navigation;
}

export type DocParams = {
  params: {
    slug: string;
  };
};
