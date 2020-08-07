import navDocs from "../../content/sugarcube/nav.yml";

export const sectionListDocs = navDocs.map(item => ({
  ...item,
  directory: "sugarcube"
}));
