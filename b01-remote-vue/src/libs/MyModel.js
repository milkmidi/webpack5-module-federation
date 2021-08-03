import _ from 'lodash';

export const add = (a, b) => a + b;

const config = {
  name: 'milkmidi',
};

export const getData = () => _.get(config, 'name');
export default config;
