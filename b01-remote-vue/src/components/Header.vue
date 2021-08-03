<script>
import { ref } from 'vue';

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
    <h1>hi, Header, {{ value }}</h1>
    <button @click="value++">
      increment
    </button>
  </div>
</template>

<style scoped>
.header {
  border: 2px solid black;
  padding: 5px;
  background-color: #1abc9c;
}
</style>
