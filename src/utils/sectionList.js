import navDocs from '../../content/docs/nav.yml';

console.log(navDocs);

export const sectionListDocs = navDocs.map(
  (item) => ({
    ...item,
    directory: "docs",
  }),
);
