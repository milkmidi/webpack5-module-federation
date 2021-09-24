import { createApp, defineAsyncComponent } from 'vue';
// import App from './App.vue';

const App = defineAsyncComponent(() => import('./App.vue'));

createApp(App)
  .mount('#root');
