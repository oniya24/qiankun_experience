import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StoreContext } from './Context';
import "antd/dist/antd.css";
// if (window.__POWERED_BY_QIANKUN__) {
//   // 动态设置 webpack publicPath，防止资源加载出错
//   // eslint-disable-next-line no-undef
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }

function render(props = {}) {
  const { container, store } = props;
  
  const baseURL = container ? '/react' : '';
  ReactDOM.render(
    <BrowserRouter basename={baseURL} >
      <StoreContext.Provider value={ store }>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>
  , container ? container.querySelector('#root') : document.querySelector('#root'));
}
if(!window.__POWERED_BY_QIANKUN__){
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
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}
