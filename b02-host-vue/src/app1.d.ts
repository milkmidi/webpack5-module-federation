declare module 'app1/MyModel' {

  export declare const add: (a: number, b: number) => number;

  declare const config: {
    name: string;
  };
  export declare const getData: () => any;
  export default config;
}

declare module 'app1/MyHeader' {
  type HeaderProps = {
    initValue: {
      type: NumberConstructor;
      default: number;
    };
  }
  // const component: defineComponent<HeaderProps, {}, any>;
  const component =   import("vue").DefineComponent<HeaderProps, {}, any>({});
  // const component: ReturnType<typeof defineComponent>;
  export default component
}

declare module 'app1/MyButton' {
  type MyButtonProps = {
    defaultValue?: {
      type: NumberConstructor;
      default: number;
    };
  }
  const component: import("vue").DefineComponent<MyButtonProps, {}, any>;
  export default component;
}