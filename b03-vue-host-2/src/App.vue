<script>
// import loadComponent from './utils/loadComponent';
import { defineAsyncComponent, reactive } from 'vue';

// 有 bootstrap 的話，就可以這樣寫
// import useData from 'milkmidiLibrary/useData';
// import MyModel from 'milkmidiLibrary/MyModel';
// 沒有的話，就需要 lazyload
import('milkmidiLibrary/MyModel').then((myModel) => {
  // console.log(myModel.default);
});
const MyHeader = defineAsyncComponent(() => import('milkmidiLibrary/MyHeader'));
const MyButton = defineAsyncComponent(() => import('milkmidiLibrary/MyButton'));

export default {
  components: {
    MyHeader,
    MyButton,
  },
  setup() {
    const state = reactive({
      data: undefined,
      isLoading: false,
    });
    import('milkmidiLibrary/useData').then((module) => {
      const result = module.default();
      console.log(result);
      state.isLoading = result.isLoading;
      state.data = result.data; // not work. OOP
    });
    return {
      state,
    };
  },
};
</script>

<template>
  <div id="app">
    <h1>Host2</h1>
    <MyHeader />
    <MyButton />
    <h3>{{ state }}</h3>
  </div>
</template>
