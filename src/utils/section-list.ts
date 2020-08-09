import navDocs from "../../content/sugarcube/nav.yml";
import {NavItem} from "../types";

export const sectionListDocs: NavItem[] = navDocs.map((item) => ({
  ...item,
  directory: "sugarcube",
}));
