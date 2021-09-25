import { reactive, onMounted } from 'vue';
import _ from 'lodash';

console.log('%cuseDataWithLodash', 'background:#2ecc71;color:white;font-size:20px;');

export type UseFetchDataType = {
  isLoading : boolean;
  data?: string;
}

const useFetchData = ():UseFetchDataType => {
  const state:UseFetchDataType = reactive({
    data: undefined,
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    state.data = _.get({ name: 'milkmidi' }, 'name');
    state.isLoading = false;
  });
  return state;
};

export default useFetchData;
