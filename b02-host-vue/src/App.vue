<script>
import { defineAsyncComponent } from 'vue';
import MyModel from 'app1/MyModel';
import Button from 'app1/Button';

const RemoteHeader = defineAsyncComponent(() => import('app1/Header'));

export default {
  components: {
    RemoteHeader,
    Button,
  },
  data() {
    return {
      name: 'default',
    };
  },
  mounted() {
    console.log(MyModel);
    this.name = MyModel.name;
  },
};
</script>

<template>
  <div id="app">
    <RemoteHeader />
    <RemoteHeader :init-value="10" />
    <Button />
    <h1>name:{{ name }}</h1>
  </div>
</template>
