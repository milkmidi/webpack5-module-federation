<script>

import { defineAsyncComponent } from 'vue';
import MyModel, { add } from 'app1/MyModel';
import MyButton from 'app1/MyButton';

const RemoteMyHeader = defineAsyncComponent(() => import('app1/MyHeader'));

export default {
  components: {
    RemoteMyHeader,
    MyButton,
  },
  data() {
    return {
      name: 'default',
    };
  },
  mounted() {
    console.log(MyModel);
    console.log(add(1, 1));
    // this.name = MyModel.name;
  },
};
</script>

<template>
  <div id="app">
    <RemoteMyHeader />
    <RemoteMyHeader :init-value="10" />
    <MyButton />
    <h1>name:{{ name }}</h1>
  </div>
</template>
