declare module 'milkmidiLibrary/MyModel' {

  export declare const add: (a: number, b: number) => number;

  declare const config: {
    name: string;
    value: string;
  };
  export default config;
}


declare module 'milkmidiLibrary/MyButton' {
  type MyButtonProps = {
    defaultValue?: {
      type: NumberConstructor;
      default: number;
    };
  }
  const component: import("vue").DefineComponent<MyButtonProps, {}, any>;
  export default component;
}
