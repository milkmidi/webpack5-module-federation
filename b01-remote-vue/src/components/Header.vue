<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(0);
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
}
</style>
