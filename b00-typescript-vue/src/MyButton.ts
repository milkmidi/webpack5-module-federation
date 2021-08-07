import {  defineComponent } from 'vue';

export default defineComponent({
  props: {
    defaultValue: {
      type: Number,
      default: 0,
    },
  },
});