import Vue from 'vue';
import store from './store';
import App from './components/App.vue';

export const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
