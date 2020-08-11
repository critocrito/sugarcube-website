declare const InstallTrigger: unknown;

// https://stackoverflow.com/a/49328524
export const isFirefox = typeof InstallTrigger !== "undefined";
export const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
