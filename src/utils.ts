import ncubeNav from "../content/ncube/nav.yml";
import sugarcubeNav from "../content/sugarcube/nav.yml";
import {NavItem} from "./types";

declare const InstallTrigger: unknown;

export const sugarcubeSections: NavItem[] = sugarcubeNav.map((item) => ({
  ...item,
  directory: "sugarcube",
}));

export const ncubeSections: NavItem[] = ncubeNav.map((item) => ({
  ...item,
  directory: "ncube",
}));

// https://stackoverflow.com/a/49328524
export const isFirefox = typeof InstallTrigger !== "undefined";
export const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
