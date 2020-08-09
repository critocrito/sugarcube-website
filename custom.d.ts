declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.yml" {
  const content: Array<{
    title: string;
    items: Array<{slug: string}>;
  }>;
  export default content;
}
