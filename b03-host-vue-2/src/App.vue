<script>
import { defineAsyncComponent } from 'vue';
import loadComponent from './utils/loadComponent';
// import MyButton from 'app1/MyButton';

loadComponent('app1', './MyModel').then((module) => {
  console.log(module.default);
});
const MyHeader = defineAsyncComponent(() => loadComponent('app1', './MyHeader'));

export default {
  components: {
    MyHeader,
    // MyButton,
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
  </div>
</template>
