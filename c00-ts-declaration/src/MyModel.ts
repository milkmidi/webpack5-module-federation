import _ from 'lodash';

console.log('Remote MyModel');
export const add = (a:number, b:number):number => a + b;

const config = {
  name: 'milkmidi',
};

export const getData = () => _.get(config, 'name');
export default config;
