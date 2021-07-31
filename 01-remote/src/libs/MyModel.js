import _ from 'lodash';
// import $ from 'jquery';


export const add = (a,b) => {
  return a+b;
}


const config = {
  name: 'milkmidi'
}

export const getData = () => {
  // return $;
  return _.get(config, 'name');
}
export default config;