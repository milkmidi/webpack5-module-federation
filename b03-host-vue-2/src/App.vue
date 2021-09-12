<script>
import { defineAsyncComponent } from 'vue';
// import MyModel from 'app1/MyModel'; // 有 bootstrap 的話，就可以這樣寫
import loadComponent from './utils/loadComponent';
// 可以不需要這樣寫
import('app1/MyModel').then((myModel) => { // 沒有 bootstrap 就需要這樣寫
  console.log(myModel);
});

/* loadComponent('app1', './MyModel').then((module) => {
  console.log(module.default);
}); */
const MyHeader = defineAsyncComponent(() => loadComponent('app1', './MyHeader'));
// const MyHeader = defineAsyncComponent(() => import('app1/MyHeader'));
const MyButton = defineAsyncComponent(() => import('app1/MyButton'));

export default {
  components: {
    MyHeader,
    MyButton,
  },
  data() {
    return {
      name: 'default',
    };
  },
  mounted() {
    // console.log(MyModel);
    // console.log(add(1, 1));
    // this.name = MyModel.name;
  },
};
</script>

<template>
  <div id="app">
    <h1>name:{{ name }}</h1>
    <MyHeader />
    <MyHeader :init-value="10" />
    <MyButton />
  </div>
</template>
