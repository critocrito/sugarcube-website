import {loadMdx, loadNavigation, slugs} from "$lib/data";
import {DocParams, MetaHeader, Navigation} from "$lib/types";

export const getDocPaths = async (topic: string): Promise<Array<DocParams>> => {
  return (await slugs(topic)).map((slug) => ({params: {slug}}));
};

export const getDocProps = async (
  topic: string,
  slug: string,
): Promise<{content: string; meta: MetaHeader; navigation: Navigation}> => {
  const {content, meta} = await loadMdx(topic, slug);
  const navigation = await loadNavigation(topic);

  return {content, meta, navigation};
};
