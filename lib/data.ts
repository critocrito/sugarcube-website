import {fold} from "fp-ts/lib/Either";
import {pipe} from "fp-ts/lib/pipeable";
import fs from "fs";
import fsP from "fs/promises";
import matter from "gray-matter";
import * as t from "io-ts";
import {Validation} from "io-ts";
import reporter from "io-ts-reporters";
import path from "path";

import {
  MdxFile,
  MetaHeader,
  MetaHeaderV,
  Navigation,
  NavigationItem,
} from "$lib/types";

const logErrors = (id: string, validation: Validation<unknown>): void => {
  const errors = reporter.report(validation).map((line) => `\t${line}`);
  console.error(`Error validating ${id}:`);
  console.error(errors.join("\n"));
};

const contentPath = (topic: string): string =>
  path.join(process.cwd(), "content", topic);

export const slugs = async (topic: string): Promise<string[]> => {
  const files = await fsP.readdir(contentPath(topic));

  return files
    .filter((file) => {
      const stat = fs.lstatSync(path.join(contentPath(topic), file));
      const isMdx = path.extname(file) === ".mdx";

      return stat.isFile() && isMdx;
    })
    .map((file) => {
      return path.basename(file, ".mdx");
    });
};

export const loadMdx = async (
  topic: string,
  slug: string,
): Promise<MdxFile> => {
  const file = path.join(contentPath(topic), `${slug}.mdx`);
  const fileContents = (await fsP.readFile(file)).toString();
  const {data, content} = matter(fileContents);

  const result = t.exact(MetaHeaderV).decode(Object.assign(data, {slug}));

  return pipe(
    result,
    fold(
      (_) => {
        logErrors(`${topic}/${slug}/MetaHeader`, result);
        throw new Error(`ValidationError for ${topic}/${slug}/MetaHeader`);
      },
      (meta) => ({meta, content}),
    ),
  );
};

export const loadMdxDocs = async (topic: string): Promise<MdxFile[]> => {
  const docs = await slugs(topic);

  const files = await Promise.all(
    docs.map(async (slug) => {
      const file = await loadMdx(topic, slug);
      return file;
    }),
  );

  return files;
};

export const loadNavigation = async (topic: string): Promise<Navigation> => {
  let first: MetaHeader | undefined;
  const bySlug = new Map();

  // Load all MDX documents for this topic and populate the lookup map and set the starting point.
  (await loadMdxDocs(topic)).forEach(({meta}) => {
    if (!meta.prev) {
      first = meta;
    }
    bySlug.set(meta.slug, meta);
  });

  if (!first) {
    throw new Error(`Navigation for ${topic} has no starting point`);
  }

  const sorted: MetaHeader[] = [];
  for (let meta = first; meta !== undefined; meta = bySlug.get(meta.next)) {
    sorted.push(meta);
  }

  return [
    ...sorted
      .reduce((memo, {section, slug, title}) => {
        const items = memo.get(section) || [];
        return memo.set(section, [...items, {slug, title}]);
      }, new Map<string, NavigationItem[]>())
      .entries(),
  ];

  // const sections = metaBlocks.reduce((memo, meta) => {
  //   const section = memo.get(meta.section) || [];
  //   return memo.set(meta.section, [meta, ...section]);
  // }, new Map());

  // console.log(metaBlocks);

  // const headers = metaBlocks.reduce((memo, {slug, ...meta}) => {
  //   return memo.set(slug, meta);
  // }, new Map());

  // // if (!first) {
  // //   throw new Error(`Navigation for ${topic} has no starting point`);
  // // }

  // const sections = [
  //   ...[...headers.values()].reduce(
  //     (memo, {section}) => memo.add(section),
  //     new Set<string>(),
  //   ),
  // ];

  // sections.reduce((memo, section) => {
  //   let _entries = memo.has(section) ? memo.get(section) : [];
  //   return memo;
  // }, new Map());

  // console.log(sections);

  // return sections;
};
