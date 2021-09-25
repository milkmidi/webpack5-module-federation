<script>
import MyButton from './components/MyButton.vue';
import MyModel from './libs/MyModel';
import useDataWithLodash from './hooks/useDataWithLodash';

console.log('%cApp.vue', 'background:#2ecc71;color:white;font-size:20px;');
export default {
  components: {
    MyButton,
  },
  setup() {
    const state = useDataWithLodash();
    return {
      state,
    };
  },
  mounted() {
    console.log('MyModel', MyModel);
  },
};
</script>

<template>
  <div id="app">
    <h1>PROVIDER</h1>
    <MyButton />
    <MyButton :default-value="10" />
    <section>
      <code>{{ state }}</code>
    </section>
  </div>
</template>

<style scoped>
#app {
  max-width: 640px;
  margin: 0 auto;
}
section {
  border: 1px solid black;
  padding: 5px;
}
</style>
