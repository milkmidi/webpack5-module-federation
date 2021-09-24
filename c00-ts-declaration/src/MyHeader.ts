import { ref, defineComponent, h } from 'vue';

console.log('Remote Header.vue');
export default defineComponent({
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
  render() {
    return h('h1', {}, 'hi')
  }
});