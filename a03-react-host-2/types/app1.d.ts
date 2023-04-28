/// <reference types="react" />
declare module "app1/Header" {
  import React from 'react';
  type HeaderProps = {
      initCount?: number;
  };
  const _default: React.NamedExoticComponent<HeaderProps>;
  export default _default;
}
declare module "app1/Footer" {
  import React from 'react';
  const Footer: React.FC;
  export default Footer;
}
declare module "app1/EmotionReactComponent" {
  type EmotionReactComponentProps = {
      initCount?: number;
  };
  const _default_1: import("react").NamedExoticComponent<EmotionReactComponentProps>;
  export default _default_1;
}
declare module "app1/MyModel" {
  export const add: (a: number, b: number) => number;
  const config: {
      name: string;
  };
  export const getData: () => string;
  export default config;
}
