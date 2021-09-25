<script>
import { defineAsyncComponent, reactive } from 'vue';
// 沒 bootstrap ，就不能這樣寫
// import MyModel from 'milkmidiLibrary/MyModel';
// 需要 lazyload
import('milkmidiLibrary/MyModel').then((myModel) => {
  console.log(myModel.default);
});
const MyButton = defineAsyncComponent(() => import('milkmidiLibrary/MyButton'));

export default {
  components: {
    MyButton,
  },
  setup() {
    const state = reactive({
      data: undefined,
      isLoading: false,
    });
    // 這裡會無解
    import('milkmidiLibrary/useDataWithLodash').then((module) => {
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
    <h1>Host C</h1>
    <MyButton />
    <h3>{{ state }}</h3>
  </div>
</template>
