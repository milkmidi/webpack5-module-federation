<script>
import MyHeader from './components/MyHeader.vue';
import MyButton from './components/MyButton.vue';
import MyModel from './libs/MyModel';

import useData from './hooks/useData';

export default {
  components: {
    MyHeader,
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
  },
};
</script>

<template>
  <div id="app">
    <MyHeader />
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
section {
  border: 1px solid black;
}
</style>
