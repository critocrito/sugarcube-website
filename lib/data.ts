import {fold} from "fp-ts/lib/Either";
import {pipe} from "fp-ts/lib/pipeable";
import fs from "fs";
import fsP from "fs/promises";
import matter from "gray-matter";
import * as t from "io-ts";
import path from "path";

import {MdxFile, MetaHeaderV} from "$lib/types";
import {logErrors} from "$lib/utils";

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

  const result = t.exact(MetaHeaderV).decode(data);

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
