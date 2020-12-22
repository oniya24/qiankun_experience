/**注册微应用 
 * 这里注册vue-app 和 react-app
*/
import store from './redux';

// 注册信息主要包含以下内容
// 不重复名称 入口(在哪拉文件) container(??) activeRule(匹配到浏览器的URL)
const AppsInfo = [
  {
    name: 'react-app', // app name registered
    entry: '//localhost:3000',
    container: '#app-qiankun',
    activeRule: '/react',
  },
  {
    name: 'vue-app', // app name registered
    entry: '//localhost:3001',
    container: '#app-qiankun',
    activeRule: '/vue',
  }
]

const microApps = AppsInfo.map((item)=> {
  return {
    ...item,
    props:{
      store,
      activeRule: item.activeRule
    }
  }
});

export default microApps;