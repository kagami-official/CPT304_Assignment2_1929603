// src/main.js
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import CountryPage from './components/CountryPage.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/country/:country', component: CountryPage, name: 'CountryPage', props: true },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
