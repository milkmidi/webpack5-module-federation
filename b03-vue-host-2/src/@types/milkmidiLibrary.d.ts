declare module 'milkmidiLibrary/MyModel' {

  export declare const add: (a: number, b: number) => number;

  declare const config: {
    name: string;
    value: string;
  };
  export declare const getData: () => any;
  export default config;
}

declare module 'milkmidiLibrary/MyHeader' {
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

declare module 'milkmidiLibrary/useData' {
  declare type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  export declare type UseFetchDataType = {
      isLoading: boolean;
      data?: TodoType;
  };
  declare const useFetchData: () => UseFetchDataType;
  export default useFetchData;
}