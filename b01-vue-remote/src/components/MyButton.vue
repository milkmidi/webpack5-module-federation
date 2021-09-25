<script>
/* eslint-disable no-plusplus */
import { reactive } from 'vue';

console.log('%cMyButton.vue', 'background:#2ecc71;color:white;font-size:20px;');

export default {
  props: {
    defaultValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { attrs }) {
    const state = reactive({
      count: props.defaultValue || 0,
    });

    function increment() {
      state.count++;
    }

    return () => (
      <button
        onClick={increment}
        {...attrs}
        >MyButton:count={state.count}</button>
    );
  },
};

</script>

<style scoped>
button {
  display: block;
  margin: 12px 0;
  padding: 10px;
  background-color: rgb(177, 38, 70);
  color:black;
  font-size: 48px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  box-shadow: 0px 2px 0px rgb(121, 24, 47);
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 0px rgb(121, 24, 47);
}
</style>
