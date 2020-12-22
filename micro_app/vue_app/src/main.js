import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI)
let instance = null; 
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

/**
 * 不存在主应用时可直接单独运行
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props)
  const {  store } = props
  Vue.prototype.$store = store;
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  // instance.$destory();
  console.log(instance)
  instance = null;
  // ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}