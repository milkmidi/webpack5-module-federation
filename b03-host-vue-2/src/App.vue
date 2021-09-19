<script>
import { defineAsyncComponent } from 'vue';
// import MyModel from 'milkmidiLibrary/MyModel'; // 有 bootstrap 的話，就可以這樣寫
// import loadComponent from './utils/loadComponent';
// 可以不需要這樣寫
import('milkmidiLibrary/MyModel').then((myModel) => { // 沒有 bootstrap 就需要這樣寫
  console.log(myModel.default);
});

/* loadComponent('app1', './MyModel').then((module) => {
  console.log(module.default);
}); */
// const MyHeader = defineAsyncComponent(() => loadComponent('milkmidiLibrary', './MyHeader'));
const MyHeader = defineAsyncComponent(() => import('milkmidiLibrary/MyHeader'));
const MyButton = defineAsyncComponent(() => import('milkmidiLibrary/MyButton'));

export default {
  components: {
    MyHeader,
    MyButton,
  },
};
</script>

<template>
  <div id="app">
    <h1>Host2</h1>
    <MyHeader />
    <MyButton />
  </div>
</template>
