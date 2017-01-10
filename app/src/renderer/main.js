import Vue from 'vue';
import Electron from 'vue-electron';
import Router from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App from './App.vue';
import routes from './routes';

Vue.use(Electron);
Vue.use(Router);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

const vue = new Vue({
  router,
  ...App,
}).$mount('#app');

vue.$electron.ipcRenderer.on('on-open-file', (event, args) => {
  vue.$store.dispatch('setOpenFile', { file: args[0] });
});

vue.$electron.ipcRenderer.on('on-prev-item', () => {
  vue.$store.dispatch('setNextItem', { action: 'prev' });
});

vue.$electron.ipcRenderer.on('on-next-item', () => {
  vue.$store.dispatch('setNextItem', { action: 'next' });
});
