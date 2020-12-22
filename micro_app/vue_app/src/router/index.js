import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from '../pages/category.vue';
import Detail from '../pages/detail.vue';
import Display from '../pages/display.vue';


const routes = [
  {
    name: 'category',
    path: '/category',
    component: Category
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail
  },
  {
    name: 'display',
    path: '/display',
    component: Display
  }
]

Vue.use(VueRouter);
const baseURL = window.__POWERED_BY_QIANKUN__ ? '/vue' : '';
export default new VueRouter({
  base: baseURL,
  routes,
  mode: 'history',
})