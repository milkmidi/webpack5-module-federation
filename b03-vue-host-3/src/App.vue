<script>
console.log('App.vue');
const { default: MyModel, add } = await import('milkmidiLibrary/MyModel');
const { default: MyButton } = await import('milkmidiLibrary/MyButton');
const { default: useDataWithLodash } = await import('milkmidiLibrary/useDataWithLodash');

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
    console.log(MyModel);
    console.log('MyModel.add(1,1) = ', add(1, 1));
  },
};
</script>

<template>
  <div id="app">
    <h1>Host</h1>
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
