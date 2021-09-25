import _ from 'lodash';

export const add = (a:number, b:number):number => {
  return a + b;
};

const config = {
  name: 'milkmidi',
};

export const getData = ():string => {
  return _.get(config, 'name');
};
export default config;
