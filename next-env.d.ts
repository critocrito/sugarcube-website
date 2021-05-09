/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@mdx-js/loader" />

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: ReactComponent;

  export {ReactComponent};
  export default content;
}
