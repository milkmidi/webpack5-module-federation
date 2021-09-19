import { reactive, onMounted } from 'vue';
import axios from 'axios';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type UseFetchDataType = {
  isLoading : boolean;
  data?: TodoType;
}

const useFetchData = ():UseFetchDataType => {
  const state:UseFetchDataType = reactive({
    data: undefined,
    isLoading: false,
  });
  onMounted(async () => {
    state.isLoading = true;
    const { data } = await axios.get<TodoType>('https://jsonplaceholder.typicode.com/todos/1');
    state.data = data;
    state.isLoading = false;
  });
  return state;
};

export default useFetchData;
