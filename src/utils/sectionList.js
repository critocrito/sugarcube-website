import navDocs from '../../content/docs/nav.yml';

export const sectionListDocs = navDocs.map(
  (item) => ({
    ...item,
    directory: "docs",
  }),
);
