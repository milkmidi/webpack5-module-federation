/* eslint-disable no-plusplus */
import { reactive } from 'vue';

export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0,
    });

    function increment() {
      state.count++;
    }

    // return the render function
    return () => (
      <button
        onClick={increment}
        {...attrs}
        >button:count={state.count}</button>
    );
  },
};
