import { createApp, defineAsyncComponent } from 'vue';

const App = defineAsyncComponent(() => import('./App.vue'));

createApp(App)
  .mount('#root');
