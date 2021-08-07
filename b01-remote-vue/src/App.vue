<script>
import MyHeader from './components/MyHeader.vue';
import MyButton from './components/MyButton.vue';
import MyModel from './libs/MyModel';

export default {
  components: {
    MyHeader,
    MyButton,
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
  mounted() {
    console.log(MyModel);
  },
};
</script>

<template>
  <div id="app">
    <MyHeader />
    <MyButton
      data-name="MyButton"
      @click="value++"
    />
    <h1>value:{{ value }}</h1>
  </div>
</template>
