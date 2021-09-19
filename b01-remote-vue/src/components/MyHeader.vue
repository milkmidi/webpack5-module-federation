<script>
console.log('%cRemote Header', 'background: #222; color: #bada55');
export default {
  props: {
    text: {
      type: String,
      default: 'hi Header',
    },
  },
};
</script>

<template>
  <header class="header">
    <h1>{{ text }}</h1>
  </header>
</template>

<style scoped>
.header {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 8px;
  border: 1px solid black;
  padding: 10px 15px;
  background-color: rgb(72, 175, 165);
  color: white;
}
h1 {
  padding: 0;
  margin: 0;
  font-size: 40px;
}
</style>
