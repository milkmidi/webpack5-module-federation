<script>
import { defineAsyncComponent } from 'vue';
import _ from 'lodash';

import MyModel, { add } from 'milkmidiLibrary/MyModel';
import MyButton from 'milkmidiLibrary/MyButton';
import useData from 'milkmidiLibrary/useData';
// 或是 lazy load
const RemoteMyHeader = defineAsyncComponent(() => import('milkmidiLibrary/MyHeader'));

export default {
  components: {
    RemoteMyHeader,
    MyButton,
  },
  setup() {
    const state = useData();
    return {
      state,
    };
  },
  mounted() {
    console.log(MyModel);
    console.log('MyModel.add(1,1) = ', add(1, 1));
    console.log('host lodash', _.add(1, 1));
  },
};
</script>

<template>
  <div id="app">
    <h1>Host</h1>
    <RemoteMyHeader />
    <MyButton />
    <MyButton :default-value="10" />
    <section>
      <pre>
        {{ state }}
      </pre>
    </section>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  background-color: black;
  color: white;
}
</style>
