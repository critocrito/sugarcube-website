import * as t from "io-ts";

export const MetaHeaderV = t.intersection([
  t.type({title: t.string, section: t.string}),
  t.partial({prev: t.string, next: t.string}),
]);

export type MetaHeader = t.TypeOf<typeof MetaHeaderV>;

export type MdxFile = {
  meta: MetaHeader;
  content: string;
};
