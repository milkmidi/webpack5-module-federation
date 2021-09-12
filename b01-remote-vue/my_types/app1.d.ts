declare module "app1/MyModel" {
    export const add: (a: number, b: number) => number;
    const config: {
        name: string;
    };
    export const getData: () => string;
    export default config;
}
