<script>
import Header from './components/Header.vue';
import Button from './components/Button';

export default {
  components: {
    Header,
    Button,
  },
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <Button
      data-name="MyButton"
      @click="value++"
    />
    <h1>value:{{ value }}</h1>
  </div>
</template>
