import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Calc from "calc/src/App.vue";
import Todo from "todo/src/App.vue";
import Home from "@/components/Home";
import CurrencyConverter from "currencyconverter/src/App.vue";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '', component: Home},
    {path: '/calc', component: Calc},
    {path: '/todo', component: Todo},
    {path: '/converter', component: CurrencyConverter},
  ]

})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
