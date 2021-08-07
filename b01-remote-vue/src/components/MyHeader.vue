<script>
import { ref } from 'vue';

console.log('Remote Header.vue');
export default {
  props: {
    initValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const value = ref(props.initValue);
    return {
      value,
    };
  },
};
</script>

<template>
  <div class="header">
    <h1>hi, Header.vue, {{ value }}</h1>
    <button @click="value++">
      increment
    </button>
  </div>
</template>

<style scoped>
.header {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
  border: 2px solid black;
  padding: 10px 15px;
  background-color: #ecf0f1;
  color: black;
}
h1 {
  padding: 0;
  margin: 0;
  font-size: 40px;
}
button {
  padding: 10px;
  background-color: rgb(72, 175, 165);
  color:black;
  font-size: 36px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  box-shadow: 0px 2px 0px rgb(49, 96, 93);
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 0px rgb(49, 96, 93);
}
</style>
