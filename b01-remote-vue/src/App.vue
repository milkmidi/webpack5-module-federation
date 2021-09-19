<script>
import MyHeader from './components/MyHeader.vue';
import MyButton from './components/MyButton.vue';
import MyModel from './libs/MyModel';

export default {
  components: {
    MyHeader,
    MyButton,
  },
  mounted() {
    console.log(MyModel);
  },
};
</script>

<template>
  <MyHeader />
  <MyButton />
  <MyButton :default-value="10" />
</template>
