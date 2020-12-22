import {
  registerMicroApps, start
} from 'qiankun';
import microApps from './apps';

const startApp = () => {
  // 1. 注册微应用，并定义生命周期函数
  registerMicroApps(microApps,{
    beforeLoad: () => {
      console.log("before Load")
    },
    beforeMount: () => {
      console.log("before Mount")
    },
    afterMount: () => {
      console.log("after Mount")
    }
  });
  
  // 2. 开启主应用
  start();
}

export default startApp;