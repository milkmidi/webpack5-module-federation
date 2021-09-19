import _ from 'lodash';

console.log('%cmilkmidiLibrary MyModel', 'background: #222; color: #bada55');
export const add = (a:number, b:number):number => a + b;

const config = {
  name: 'milkmidi',
  value: '發大財',
};

export const getData = () => _.get(config, 'name');
export default config;
