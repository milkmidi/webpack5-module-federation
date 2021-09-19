<script>
import { defineAsyncComponent } from 'vue';
import MyModel, { add } from 'milkmidiLibrary/MyModel';
import MyButton from 'milkmidiLibrary/MyButton';
import _ from 'lodash';

const RemoteMyHeader = defineAsyncComponent(() => import('milkmidiLibrary/MyHeader'));

export default {
  components: {
    RemoteMyHeader,
    MyButton,
  },
  mounted() {
    console.log(MyModel);
    console.log('MyModel.add(1,1) = ', add(1, 1));
    console.log('host lodash', _.add(1, 1));
    // this.name = MyModel.name;
  },
};
</script>

<template>
  <div id="app">
    <h1>Host</h1>
    <RemoteMyHeader />
    <MyButton />
    <MyButton :default-value="10" />
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
